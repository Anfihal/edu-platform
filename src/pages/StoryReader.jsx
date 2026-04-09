import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QTEGame } from '../components/games';
import PiggyBank from '../components/common/PiggyBank/PiggyBank';
import ChatWithAgent from '../components/common/ChatWithAgent/ChatWithAgent';
import CallAgent from '../components/common/CallAgent/CallAgent';
import './StoryReader.css';

const DEBUG = true;
const log = (...args) => { if (DEBUG) console.log('[StoryReader]', ...args); };

const storyModules = import.meta.glob('./age-*/stories/*/story.js', { eager: false });
const STORY_PATH_REGEX = /\.\/(age-\d+\+?)\/stories\/([^/]+)\/story\.js/;

// --- Helper functions (без изменений) ---
const getAgeFolder = (ageWithPlus) => {
    const age = ageWithPlus.replace('+', '');
    return age === '16' ? 'age-16+' : `age-${age}`;
};
const getAgeWithPlus = (ageFolder) => {
    const age = ageFolder.replace('age-', '');
    return age === '16+' ? '16+' : `${age}+`;
};

const getDialoguesForScene = (scene, gameState, currentScene) => {
    if (!scene) return [];
    // 1. Мини-игра есть и ещё не пройдена → диалоги ДО игры
    if (scene.miniGame && !(currentScene in gameState.miniGameResults)) {
        return Array.isArray(scene.dialogues) ? scene.dialogues : [];
    }
    // 2. После мини-игры → диалоги ПОСЛЕ игры
    if (scene.dialoguesAfterGame) {
        const gameResult = gameState.miniGameResults[currentScene];
        const branch = gameResult ? 'success' : 'fail';
        return scene.dialoguesAfterGame[branch] || (Array.isArray(scene.dialogues) ? scene.dialogues : []);
    }
    // 3. Ветвление по состоянию
    if (scene.dialogues && typeof scene.dialogues === 'object' && !Array.isArray(scene.dialogues)) {
        if (gameState.hasProtection && gameState.phoneDropped && scene.dialogues.withProtectionAndDropped) return scene.dialogues.withProtectionAndDropped;
        if (gameState.hasProtection && !gameState.phoneDropped && scene.dialogues.withProtectionAndCaught) return scene.dialogues.withProtectionAndCaught;
        if (!gameState.hasProtection && scene.dialogues.withoutProtection) return scene.dialogues.withoutProtection;
        return [];
    }
    return Array.isArray(scene.dialogues) ? scene.dialogues : [];
};

export default function StoryReader() {
    const { age, slug } = useParams();
    const navigate = useNavigate();
    const decodedAge = decodeURIComponent(age);

    const [storyData, setStoryData] = useState(null);
    const [currentScene, setCurrentScene] = useState(0);
    const [dialogueIndex, setDialogueIndex] = useState(0);
    const [gameState, setGameState] = useState({
        budget: 3000,
        hasProtection: false,
        phoneDropped: false,
        miniGameResults: {},
        choices: []
    });
    const [activeGame, setActiveGame] = useState(null);
    const [activeWidget, setActiveWidget] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showChoices, setShowChoices] = useState(false);
    const [storyComplete, setStoryComplete] = useState(false);
    const [rightCharacter, setRightCharacter] = useState(null);

    const transitionTimerRef = useRef(null);

    // 1. Загрузка истории
    useEffect(() => {
        const loadStory = async () => {
            try {
                setLoading(true);
                const availableStories = {};
                Object.keys(storyModules).forEach(path => {
                    const match = path.match(STORY_PATH_REGEX);
                    if (match) {
                        const [, folderName, storySlug] = match;
                        const ageKey = getAgeWithPlus(folderName);
                        if (!availableStories[ageKey]) availableStories[ageKey] = {};
                        availableStories[ageKey][storySlug] = storyModules[path];
                    }
                });

                const importStory = availableStories[decodedAge]?.[slug];
                if (!importStory) throw new Error(`История не найдена`);

                const module = await importStory();
                const data = module.default;
                setStoryData(data);
                setGameState(prev => ({ ...prev, budget: data.budget ?? 3000 }));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadStory();
    }, [decodedAge, slug]);

    // 2. Управление персонажами (Объединенный эффект)
    useEffect(() => {
        if (!storyData) return;
        const scene = storyData.scenes[currentScene];
        if (!scene) return;

        const dialogues = getDialoguesForScene(scene, gameState, currentScene);
        const currentDialogue = dialogues[dialogueIndex];

        if (currentDialogue) {
            const character = scene.characters?.find(c => c.name === currentDialogue.speaker);
            if (character && character.side === 'right') {
                setRightCharacter(character);
            } else if (!character || character.side === 'left') {
                // Если говорит левый или кто-то сторонний, правый остается или исчезает
                // Оставляем последнего активного правого или сбрасываем
                // setRightCharacter(null); 
            }
        }
    }, [currentScene, dialogueIndex, storyData, gameState]);

    // 3. Логика переходов (Исправленный расчет индекса)
    const getNextSceneIndex = useCallback((scene, state) => {
        if (!scene?.nextScene) return currentScene + 1;
        if (typeof scene.nextScene === 'number') return scene.nextScene;

        if (typeof scene.nextScene === 'object') {
            const miniGameResult = state.miniGameResults[currentScene];
            if (miniGameResult !== undefined) {
                return miniGameResult ? scene.nextScene.onSuccess : scene.nextScene.onFail;
            }
            if (state.hasProtection && scene.nextScene.withProtection !== undefined) return scene.nextScene.withProtection;
            if (!state.hasProtection && scene.nextScene.withoutProtection !== undefined) return scene.nextScene.withoutProtection;
        }
        return currentScene + 1;
    }, [currentScene]);

    const handleNext = useCallback(() => {
        if (isTransitioning || loading || !storyData) return;

        const scene = storyData.scenes[currentScene];
        const dialoguesArray = getDialoguesForScene(scene, gameState, currentScene);
        const isLastDialogue = dialogueIndex >= dialoguesArray.length - 1;
        const choices = getChoicesForCurrentScene();
        const isMiniGamePlayed = currentScene in gameState.miniGameResults;

        if (!isLastDialogue) {
            setDialogueIndex(prev => prev + 1);
            return;
        }

        if (scene.miniGame && !isMiniGamePlayed) {
            setActiveGame(scene.miniGame.type);
            return;
        }

        if (choices && !showChoices) {
            setShowChoices(true);
            return;
        }

        // Переход к следующей сцене
        setIsTransitioning(true);
        setTimeout(() => {
            const nextIndex = getNextSceneIndex(scene, gameState);
            if (nextIndex >= 0 && nextIndex < storyData.scenes.length) {
                setCurrentScene(nextIndex);
                setDialogueIndex(0);
                setShowChoices(false);
            } else {
                setStoryComplete(true);
            }
            setIsTransitioning(false);
        }, 600);
    }, [isTransitioning, loading, storyData, currentScene, dialogueIndex, gameState, showChoices, getNextSceneIndex]);

    const handleChoice = useCallback((choice) => {
        if (isTransitioning) return;

        // Сначала вычисляем новое состояние
        setGameState(prev => {
            const newState = { ...prev };
            newState.budget -= (choice.price || 0);
            if (choice.id === 'protection') newState.hasProtection = true;
            newState.choices = [...prev.choices, choice.id];

            // Чтобы не было "прыжка", мы используем функциональный апдейт, 
            // но переход в следующую сцену делаем через useEffect или задержку,
            // используя актуальное состояние.
            return newState;
        });

        setIsTransitioning(true);
        setShowChoices(false);

        // Используем setTimeout, чтобы стейт успел обновиться
        setTimeout(() => {
            const scene = storyData.scenes[currentScene];
            // Пересчитываем индекс сцены на основе ПОСЛЕДНЕГО стейта (через функцию)
            setGameState(currentState => {
                const nextIndex = getNextSceneIndex(scene, currentState);
                if (nextIndex >= 0 && nextIndex < storyData.scenes.length) {
                    setCurrentScene(nextIndex);
                    setDialogueIndex(0);
                } else {
                    setStoryComplete(true);
                }
                return currentState;
            });
            setIsTransitioning(false);
        }, 600);
    }, [isTransitioning, storyData, currentScene, getNextSceneIndex]);

    const handleMiniGameComplete = useCallback((result) => {
        log(`Игра завершена: ${result.success}`);
        setActiveGame(null);

        setGameState(prev => ({
            ...prev,
            miniGameResults: { ...prev.miniGameResults, [currentScene]: result.success },
            phoneDropped: (storyData?.scenes[currentScene]?.miniGame?.type === 'qte' && !result.success)
                ? true : prev.phoneDropped
        }));

        // Важно: мы НЕ перепрыгиваем сцену, а просто обновляем стейт.
        // Теперь getDialoguesForScene автоматически вернет dialoguesAfterGame.
        setDialogueIndex(0);
    }, [currentScene, storyData]);

    const getChoicesForCurrentScene = useCallback(() => {
        if (!storyData) return null;
        const scene = storyData.scenes[currentScene];
        if (!scene?.choices) return null;
        if (Array.isArray(scene.choices)) return scene.choices;

        const c = scene.choices;
        if (gameState.hasProtection && gameState.phoneDropped && c.withProtectionAndDropped) return c.withProtectionAndDropped;
        if (gameState.hasProtection && !gameState.phoneDropped && c.withProtectionAndCaught) return c.withProtectionAndCaught;
        if (!gameState.hasProtection && c.withoutProtection) return c.withoutProtection;
        return null;
    }, [storyData, currentScene, gameState]);

    if (loading) return <div className="story-reader loading-state"><div className="loading-spinner">Загрузка...</div></div>;
    if (error) return <div className="story-reader error-state">{error}</div>;

    const scene = storyData.scenes[currentScene];
    const dialoguesArray = getDialoguesForScene(scene, gameState, currentScene);
    const currentDialogue = dialoguesArray[dialogueIndex];
    const choices = getChoicesForCurrentScene();

    return (
        <div className={`story-reader ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="story-bg" style={{ backgroundImage: `url(${scene?.bg || storyData.bg})` }} />

            {storyData.budget !== undefined && <PiggyBank budget={gameState.budget} />}

            <div className="characters-container">
                {scene?.characters?.find(c => c.side === 'left') && (
                    <div className={`character left ${isTransitioning ? 'fade-out' : ''}`}>
                        <img src={scene.characters.find(c => c.side === 'left').img} alt="left" />
                    </div>
                )}
                {rightCharacter && (
                    <div className={`character right ${isTransitioning ? 'fade-out' : ''}`}>
                        <img src={rightCharacter.img} alt="right" />
                    </div>
                )}
            </div>

            <div className={`dialogue-box ${showChoices || activeGame ? 'dialogue-minimized' : ''}`}>
                <div className="dialogue-content">
                    {currentDialogue && (
                        <>
                            <p className="speaker-name">{currentDialogue.speaker}</p>
                            <p className="dialogue-text">{currentDialogue.text}</p>
                        </>
                    )}
                    <div className="dialogue-buttons">
                        {dialogueIndex > 0 && <button className="dialogue-btn secondary" onClick={() => setDialogueIndex(i => i - 1)}>← Назад</button>}
                        {!showChoices && !activeGame && (
                            <button className="dialogue-btn" onClick={handleNext}>
                                {dialogueIndex < dialoguesArray.length - 1 ? 'Далее' : (choices ? 'Выбрать' : 'Продолжить')}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {showChoices && choices && (
                <div className="choices-container fade-in">
                    <div className="choices-grid">
                        {choices.map(choice => (
                            <button key={choice.id} className="choice-card" onClick={() => handleChoice(choice)}>
                                <div className="choice-url-label">path://{choice.id}</div>
                                <div className="choice-icon" style={{ backgroundImage: `url(/icons/${choice.icon}.png)` }} />
                                <h3>{choice.title}</h3>
                                {choice.price > 0 && <span className="choice-price">{choice.price}₽</span>}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {activeGame === 'qte' && (
                <QTEGame
                    title={scene.miniGame.title}
                    onSuccess={() => handleMiniGameComplete({ success: true })}
                    onFail={() => handleMiniGameComplete({ success: false })}
                />
            )}

            <button className="back-btn-small" onClick={() => navigate(-1)}>← Назад</button>
        </div>
    );
}