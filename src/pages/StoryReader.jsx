import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QTEGame } from '../components/games';
import PiggyBank from '../components/common/PiggyBank/PiggyBank';
import ChatWithAgent from '../components/common/ChatWithAgent/ChatWithAgent';
import CallAgent from '../components/common/CallAgent/CallAgent';
import './StoryReader.css';

const DEBUG = false;
const log = (...args) => { if (DEBUG) console.log('[StoryReader]', ...args); };

const storyModules = import.meta.glob('./age-*/stories/*/story.js', { eager: false });
const STORY_PATH_REGEX = /\.\/(age-\d+\+?)\/stories\/([^/]+)\/story\.js/;

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
    if (scene.miniGame && !(currentScene in gameState.miniGameResults)) {
        return Array.isArray(scene.dialogues) ? scene.dialogues : [];
    }
    if (scene.dialoguesAfterGame) {
        const gameResult = gameState.miniGameResults[currentScene];
        const branch = gameResult ? 'success' : 'fail';
        return scene.dialoguesAfterGame[branch] || (Array.isArray(scene.dialogues) ? scene.dialogues : []);
    }
    if (scene.dialogues && typeof scene.dialogues === 'object' && !Array.isArray(scene.dialogues)) {
        // Простые ветки (со страховкой / без страховки)
        if (gameState.hasProtection && scene.dialogues.withProtection)
            return scene.dialogues.withProtection;
        if (!gameState.hasProtection && scene.dialogues.withoutProtection)
            return scene.dialogues.withoutProtection;

        // Ветки для телефона
        if (gameState.hasProtection && gameState.phoneDropped && scene.dialogues.withProtectionAndDropped)
            return scene.dialogues.withProtectionAndDropped;
        if (gameState.hasProtection && !gameState.phoneDropped && scene.dialogues.withProtectionAndCaught)
            return scene.dialogues.withProtectionAndCaught;
        if (!gameState.hasProtection && scene.dialogues.withoutProtection)
            return scene.dialogues.withoutProtection;

        // Ветки для поездки
        if (gameState.hasProtection && gameState.tripCancelled && scene.dialogues.withProtectionAndTripCancelled)
            return scene.dialogues.withProtectionAndTripCancelled;
        if (gameState.hasProtection && !gameState.tripCancelled && scene.dialogues.withProtectionAndTripGoes)
            return scene.dialogues.withProtectionAndTripGoes;
        if (!gameState.hasProtection && gameState.tripCancelled && scene.dialogues.withoutProtectionAndTripCancelled)
            return scene.dialogues.withoutProtectionAndTripCancelled;
        if (!gameState.hasProtection && !gameState.tripCancelled && scene.dialogues.withoutProtectionAndTripGoes)
            return scene.dialogues.withoutProtectionAndTripGoes;

        return [];
    }
    return Array.isArray(scene.dialogues) ? scene.dialogues : [];
};

const useImagePreloader = (urls) => {
    useEffect(() => {
        if (!urls || urls.length === 0) return;
        urls.forEach(url => { const img = new Image(); img.src = url; });
    }, [urls]);
};

export default function StoryReader() {
    const { age, slug } = useParams();
    const navigate = useNavigate();
    const decodedAge = decodeURIComponent(age);
    const ageFolder = getAgeFolder(decodedAge);

    const [storyData, setStoryData] = useState(null);
    const [currentScene, setCurrentScene] = useState(0);
    const [dialogueIndex, setDialogueIndex] = useState(0);
    const [gameState, setGameState] = useState({
        budget: 3000,
        hasProtection: false,
        phoneDropped: false,
        tripCancelled: false,
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
    const [leftCharacter, setLeftCharacter] = useState(null);
    const [activeSpeaker, setActiveSpeaker] = useState('');

    const transitionTimerRef = useRef(null);
    const gameCompleteTimerRef = useRef(null);

    useEffect(() => {
        return () => {
            if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
            if (gameCompleteTimerRef.current) clearTimeout(gameCompleteTimerRef.current);
        };
    }, []);

    useEffect(() => {
        const loadStory = async () => {
            try {
                setLoading(true);
                setError(null);
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
                if (!importStory) throw new Error(`История "${decodedAge}/${slug}" не найдена`);
                const module = await importStory();
                const data = module.default;
                log('История загружена:', data.title);
                setStoryData(data);
                setGameState(prev => ({
                    ...prev,
                    budget: data.budget ?? 3000,
                    hasProtection: false,
                    phoneDropped: false,
                    tripCancelled: false,
                    miniGameResults: {},
                    choices: []
                }));
                setCurrentScene(0);
                setDialogueIndex(0);
                setShowChoices(false);
                setStoryComplete(false);
                setRightCharacter(null);
                setLeftCharacter(null);
                setActiveSpeaker('');
            } catch (err) {
                log('Ошибка загрузки:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        if (decodedAge && slug) loadStory();
    }, [decodedAge, slug]);

    useEffect(() => {
        log(`Переход на сцену ${currentScene}`);
        setDialogueIndex(0);
        setShowChoices(false);
        setIsTransitioning(false);
        if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
        setActiveSpeaker('');
    }, [currentScene]);

    useEffect(() => {
        const scene = storyData?.scenes?.[currentScene];
        if (!scene) return;
        const dialoguesArray = getDialoguesForScene(scene, gameState, currentScene);
        const dialogue = dialoguesArray[dialogueIndex];
        if (!dialogue) return;

        const speakerName = dialogue.speaker;
        setActiveSpeaker(speakerName);

        const character = scene.characters?.find(c => c.name === speakerName);
        if (character) {
            if (character.side === 'left') {
                setLeftCharacter(character);
            } else if (character.side === 'right') {
                setRightCharacter(character);
            }
        }
    }, [currentScene, dialogueIndex, storyData, gameState]);

    const isSceneAvailable = useCallback(() => {
        if (!storyData || !storyData.scenes?.[currentScene]) return true;
        const scene = storyData.scenes[currentScene];
        const available = scene.available;
        if (!available) return true;
        switch (available) {
            case 'withProtection': return gameState.hasProtection;
            case 'withoutProtection': return !gameState.hasProtection;
            case 'withProtectionAndDropped': return gameState.hasProtection && gameState.phoneDropped;
            case 'withProtectionAndCaught': return gameState.hasProtection && !gameState.phoneDropped;
            case 'withProtectionAndTripCancelled': return gameState.hasProtection && gameState.tripCancelled;
            case 'withProtectionAndTripGoes': return gameState.hasProtection && !gameState.tripCancelled;
            case 'withoutProtectionAndTripCancelled': return !gameState.hasProtection && gameState.tripCancelled;
            case 'withoutProtectionAndTripGoes': return !gameState.hasProtection && !gameState.tripCancelled;
            default: return true;
        }
    }, [storyData, currentScene, gameState.hasProtection, gameState.phoneDropped, gameState.tripCancelled]);

    const getNextSceneIndex = useCallback((scene, state) => {
        if (!scene?.nextScene) return currentScene + 1;
        if (typeof scene.nextScene === 'number') return scene.nextScene;
        if (typeof scene.nextScene === 'object') {
            const miniGameResult = state.miniGameResults[currentScene];
            if (miniGameResult !== undefined) {
                const next = miniGameResult ? scene.nextScene.onSuccess : scene.nextScene.onFail;
                return next ?? currentScene + 1;
            }
            if (state.hasProtection && scene.nextScene.withProtection !== undefined) return scene.nextScene.withProtection;
            if (!state.hasProtection && scene.nextScene.withoutProtection !== undefined) return scene.nextScene.withoutProtection;
            if (state.hasProtection && state.phoneDropped && scene.nextScene.withProtectionAndDropped !== undefined) return scene.nextScene.withProtectionAndDropped;
            if (state.hasProtection && !state.phoneDropped && scene.nextScene.withProtectionAndCaught !== undefined) return scene.nextScene.withProtectionAndCaught;
        }
        return currentScene + 1;
    }, [currentScene]);

    useEffect(() => {
        if (!storyData || loading) return;
        if (!isSceneAvailable()) {
            log(`Сцена ${currentScene} недоступна, пропускаем...`);
            setIsTransitioning(true);
            if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
            transitionTimerRef.current = setTimeout(() => {
                const nextIndex = getNextSceneIndex(storyData.scenes[currentScene], gameState);
                if (nextIndex >= 0 && nextIndex < storyData.scenes.length) {
                    setCurrentScene(nextIndex);
                } else {
                    setStoryComplete(true);
                }
                setIsTransitioning(false);
                transitionTimerRef.current = null;
            }, 400);
        }
    }, [currentScene, storyData, loading, isSceneAvailable, gameState, getNextSceneIndex]);

    const preloadUrls = useMemo(() => {
        if (!storyData) return [];
        const scene = storyData.scenes[currentScene];
        const nextScene = storyData.scenes[currentScene + 1];
        const urls = [];
        [scene, nextScene].forEach(s => {
            if (!s) return;
            if (s.bg) urls.push(s.bg);
            s.characters?.forEach(c => { if (c.img) urls.push(c.img); });
        });
        return [...new Set(urls)];
    }, [storyData, currentScene]);
    useImagePreloader(preloadUrls);

    const handlePrev = useCallback(() => {
        if (isTransitioning || loading) return;
        if (dialogueIndex > 0) {
            setDialogueIndex(prev => prev - 1);
        } else if (currentScene > 0) {
            setIsTransitioning(true);
            if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
            transitionTimerRef.current = setTimeout(() => {
                setCurrentScene(prev => prev - 1);
                setIsTransitioning(false);
                transitionTimerRef.current = null;
            }, 300);
        }
    }, [dialogueIndex, currentScene, isTransitioning, loading]);

    const handleNext = useCallback(() => {
        if (isTransitioning || loading || !storyData) return;
        const scene = storyData.scenes[currentScene];
        if (!scene) return;
        const dialoguesArray = getDialoguesForScene(scene, gameState, currentScene);
        const isLastDialogue = dialoguesArray.length === 0 || dialogueIndex >= dialoguesArray.length - 1;
        const choices = getChoicesForCurrentScene();
        const isMiniGamePlayed = currentScene in gameState.miniGameResults;

        const goToNextScene = () => {
            setIsTransitioning(true);
            if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
            transitionTimerRef.current = setTimeout(() => {
                const nextIndex = getNextSceneIndex(scene, gameState);
                if (nextIndex >= 0 && nextIndex < storyData.scenes.length) {
                    setCurrentScene(nextIndex);
                } else {
                    setStoryComplete(true);
                }
                setIsTransitioning(false);
                transitionTimerRef.current = null;
            }, 600);
        };

        if (dialoguesArray.length === 0) {
            if (choices && !showChoices) setShowChoices(true);
            else goToNextScene();
            return;
        }

        if (dialogueIndex < dialoguesArray.length - 1) {
            setDialogueIndex(prev => prev + 1);
        } else if (scene.miniGame && !activeGame && !isMiniGamePlayed) {
            setActiveGame(scene.miniGame.type);
        } else if (choices && !showChoices) {
            setShowChoices(true);
        } else {
            goToNextScene();
        }
    }, [isTransitioning, loading, storyData, currentScene, dialogueIndex, gameState, activeGame, showChoices, getNextSceneIndex]);

    const handleChoice = useCallback((choice) => {
        if (isTransitioning || loading || !storyData) return;
        let updatedState;
        setGameState(prev => {
            const newState = { ...prev };
            // Поддержка разных ID покупки страховки
            if (choice.id === 'protection' || choice.id === 'buyProtection') {
                newState.budget -= choice.price;
                newState.hasProtection = true;
                newState.choices = [...prev.choices, choice.id];
            } else if (choice.price > 0) {
                newState.budget -= choice.price;
                newState.choices = [...prev.choices, choice.id];
            } else {
                newState.choices = [...prev.choices, choice.id];
            }
            updatedState = newState;
            return newState;
        });
        setIsTransitioning(true);
        setShowChoices(false);
        if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = setTimeout(() => {
            const scene = storyData.scenes[currentScene];
            const nextIndex = getNextSceneIndex(scene, updatedState);
            if (nextIndex < storyData.scenes.length) {
                setCurrentScene(nextIndex);
            } else {
                setStoryComplete(true);
            }
            setIsTransitioning(false);
            transitionTimerRef.current = null;
        }, 600);
    }, [isTransitioning, loading, storyData, currentScene, getNextSceneIndex]);

    const handleMiniGameComplete = useCallback((result) => {
        if (isTransitioning || loading) return;
        log(`Мини-игра завершена, успех: ${result.success}`);
        setActiveGame(null);
        setGameState(prev => {
            const sceneIndex = currentScene;
            const scene = storyData?.scenes[sceneIndex];
            const isTripGame = scene?.miniGame?.affectsTripCancelled === true;
            return {
                ...prev,
                miniGameResults: { ...prev.miniGameResults, [sceneIndex]: result.success },
                phoneDropped: (!isTripGame && !result.success) ? true : prev.phoneDropped,
                tripCancelled: (isTripGame && !result.success) ? true : prev.tripCancelled
            };
        });
        setDialogueIndex(0);
    }, [isTransitioning, loading, storyData, currentScene]);

    const getChoicesForCurrentScene = useCallback(() => {
        if (!storyData) return null;
        const scene = storyData.scenes[currentScene];
        if (!scene?.choices) return null;
        if (Array.isArray(scene.choices)) return scene.choices;
        if (typeof scene.choices === 'object') {
            // Простые ветки
            if (gameState.hasProtection && scene.choices.withProtection) return scene.choices.withProtection;
            if (!gameState.hasProtection && scene.choices.withoutProtection) return scene.choices.withoutProtection;
            // Телефон
            if (gameState.hasProtection && gameState.phoneDropped && scene.choices.withProtectionAndDropped) return scene.choices.withProtectionAndDropped;
            if (gameState.hasProtection && !gameState.phoneDropped && scene.choices.withProtectionAndCaught) return scene.choices.withProtectionAndCaught;
            // Поездка
            if (gameState.hasProtection && gameState.tripCancelled && scene.choices.withProtectionAndTripCancelled) return scene.choices.withProtectionAndTripCancelled;
            if (gameState.hasProtection && !gameState.tripCancelled && scene.choices.withProtectionAndTripGoes) return scene.choices.withProtectionAndTripGoes;
            if (!gameState.hasProtection && gameState.tripCancelled && scene.choices.withoutProtectionAndTripCancelled) return scene.choices.withoutProtectionAndTripCancelled;
            if (!gameState.hasProtection && !gameState.tripCancelled && scene.choices.withoutProtectionAndTripGoes) return scene.choices.withoutProtectionAndTripGoes;
        }
        return null;
    }, [storyData, currentScene, gameState.hasProtection, gameState.phoneDropped, gameState.tripCancelled]);

    if (loading) return <section className="story-reader loading-state"><div className="loading-spinner">Загрузка истории...</div></section>;
    if (error || !storyData) return <section className="story-reader error-state"><div className="error-message"><h2>История не найдена</h2><p>{error || 'Неизвестная ошибка'}</p><button onClick={() => navigate(`/age/${decodedAge}/home`)}> Назад к историям</button></div></section>;

    if (storyComplete) {
        const spentBudget = (storyData.budget || 0) - gameState.budget;
        const miniGamesPlayed = Object.keys(gameState.miniGameResults).length;
        const miniGamesWon = Object.values(gameState.miniGameResults).filter(r => r).length;
        return (
            <div className="story-reader story-complete">
                <div className="story-bg" style={{ backgroundImage: `url(${storyData.scenes?.[storyData.scenes.length - 1]?.bg || storyData.bg || ''})` }}></div>
                <div className="complete-overlay fade-in">
                    <div className="complete-card">
                        <div className="complete-icon" data-icon="trophy"></div>
                        <h2 className="complete-title">История завершена!</h2>
                        <div className="complete-stats">
                            <div className="stat-item"><span className="stat-icon" data-icon="shield"></span><div className="stat-info"><span className="stat-label">Защита</span><span className="stat-value">{gameState.hasProtection ? '✅ Куплена' : '❌ Не куплена'}</span></div></div>
                            <div className="stat-item"><span className="stat-icon" data-icon="piggy"></span><div className="stat-info"><span className="stat-label">Потрачено</span><span className="stat-value">{spentBudget.toLocaleString()}₽</span></div></div>
                            <div className="stat-item"><span className="stat-icon" data-icon="gamepad"></span><div className="stat-info"><span className="stat-label">Мини-игры</span><span className="stat-value">{miniGamesWon}/{miniGamesPlayed}</span></div></div>
                            <div className="stat-item"><span className="stat-icon" data-icon="choice"></span><div className="stat-info"><span className="stat-label">Выборов</span><span className="stat-value">{gameState.choices.length}</span></div></div>
                        </div>
                        <div className="complete-achievements">
                            {gameState.hasProtection && <div className="achievement" data-icon="shield"><span>Умный выбор</span></div>}
                            {miniGamesWon > 0 && <div className="achievement" data-icon="trophy"><span>Мастер игр</span></div>}
                            {gameState.budget > 0 && <div className="achievement" data-icon="piggy"><span>Экономный</span></div>}
                        </div>
                        <div className="complete-buttons">
                            <button className="complete-btn primary" data-icon="home" onClick={() => navigate(`/age/${decodedAge}/home`)}>В меню историй</button>
                            <button className="complete-btn secondary" data-icon="restart" onClick={() => { setStoryComplete(false); setCurrentScene(0); setDialogueIndex(0); setGameState({ budget: storyData.budget || 3000, hasProtection: false, phoneDropped: false, tripCancelled: false, miniGameResults: {}, choices: [] }); setRightCharacter(null); setLeftCharacter(null); setActiveSpeaker(''); }}>Начать заново</button>
                        </div>
                    </div>
                </div>
                <button className="back-btn-small" onClick={() => navigate(`/age/${decodedAge}/home`)}>Назад</button>
            </div>
        );
    }

    const scene = storyData.scenes[currentScene];
    if (!scene) return <div className="error-state">Ошибка: сцена не найдена</div>;

    const dialoguesArray = getDialoguesForScene(scene, gameState, currentScene);
    const currentDialogue = dialoguesArray[dialogueIndex] || null;
    const isLastDialogue = dialoguesArray.length === 0 || dialogueIndex >= dialoguesArray.length - 1;
    const choices = getChoicesForCurrentScene();
    const bgImage = scene.bg || storyData.bg || '';

    return (
        <div className={`story-reader interactive ${isTransitioning ? 'transitioning' : ''} ${showChoices ? 'showing-choices' : ''}`}>
            <div className="story-bg" style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}></div>
            {storyData.budget !== undefined && <PiggyBank budget={gameState.budget} />}
            <div className="characters-container">
                {leftCharacter && (
                    <div className={`character left ${activeSpeaker === leftCharacter.name ? 'active' : ''} ${isTransitioning ? 'fade-out' : ''}`}>
                        <img src={leftCharacter.img} alt={leftCharacter.name} loading="lazy" />
                    </div>
                )}
                {rightCharacter && (
                    <div className={`character right ${activeSpeaker === rightCharacter.name ? 'active' : ''} ${isTransitioning ? 'fade-out' : ''}`}>
                        <img src={rightCharacter.img} alt={rightCharacter.name} loading="lazy" />
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
                        {dialogueIndex > 0 && <button className="dialogue-btn secondary" onClick={handlePrev} disabled={isTransitioning}>Назад</button>}
                        {!showChoices && !activeGame && (
                            <button className="dialogue-btn" onClick={handleNext} disabled={isTransitioning}>
                                {(() => {
                                    if (!isLastDialogue) return 'Далее';
                                    if (choices) return 'Выбрать';
                                    if (scene.miniGame && !(currentScene in gameState.miniGameResults)) return 'Начать';
                                    return (currentScene < storyData.scenes.length - 1 ? 'Далее' : 'Завершить');
                                })()}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {showChoices && choices && (
                <div className="choices-container fade-in">
                    <h3 className="choices-title" data-icon="choice"></h3>
                    <div className="choices-grid">
                        {choices.map(choice => {
                            const canAfford = gameState.budget >= choice.price;
                            return (
                                <button key={choice.id} className="choice-card" data-icon={choice.icon} onClick={() => handleChoice(choice)} disabled={!canAfford && choice.price > 0}>
                                    <div className="choice-icon"></div>
                                    <h3>{choice.title}</h3>
                                    {choice.description && <p>{choice.description}</p>}
                                    {choice.price > 0 && <span className="choice-price">{choice.price.toLocaleString()}₽</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
            {activeGame === 'qte' && scene.miniGame && (
                <QTEGame
                    title={scene.miniGame.title}
                    instruction={scene.miniGame.instruction}
                    onSuccess={() => setTimeout(() => handleMiniGameComplete({ success: true }), 0)}
                    onFail={() => setTimeout(() => handleMiniGameComplete({ success: false }), 0)}
                    onClose={() => setTimeout(() => setActiveGame(null), 0)}
                />
            )}
            {storyData.widgets?.chat?.available && activeWidget === 'chat' && <ChatWithAgent onClose={() => setActiveWidget(null)} storySlug={slug} />}
            {storyData.widgets?.call?.available && activeWidget === 'call' && <CallAgent onClose={() => setActiveWidget(null)} />}
            {storyData.widgets && (
                <div className="story-widgets">
                    {storyData.widgets.chat?.available && <button className="widget-btn" data-icon="chat" onClick={() => setActiveWidget('chat')}></button>}
                    {storyData.widgets.call?.available && <button className="widget-btn" data-icon="phone" onClick={() => setActiveWidget('call')}></button>}
                </div>
            )}
            <div className="story-progress" role="progressbar">
                {storyData.scenes.map((_, i) => <div key={i} className={`progress-dot ${i === currentScene ? 'active' : ''} ${i < currentScene ? 'completed' : ''}`} />)}
            </div>
            <button className="back-btn-small" onClick={() => navigate(`/age/${decodedAge}/home`)}>Назад</button>
        </div>
    );
}