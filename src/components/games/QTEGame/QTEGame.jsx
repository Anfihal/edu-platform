import { useState, useEffect, useRef, useCallback } from 'react';
import './QTEGame.css';

export default function QTEGame({ title, instruction, onSuccess, onFail, onClose }) {
    const [progress, setProgress] = useState(100);
    const [gameOver, setGameOver] = useState(false);
    const [success, setSuccess] = useState(false);

    // Используем ref для хранения актуального значения progress без перезапуска эффектов
    const progressRef = useRef(progress);
    useEffect(() => { progressRef.current = progress; }, [progress]);

    // Таймер уменьшения прогресса
    useEffect(() => {
        if (gameOver) return;

        const timer = setInterval(() => {
            setProgress(prev => {
                const newValue = prev - 1.5;
                if (newValue <= 0) {
                    // Игра проиграна
                    setGameOver(true);
                    setSuccess(false);
                    return 0;
                }
                return newValue;
            });
        }, 50);

        return () => clearInterval(timer);
    }, [gameOver]); // зависимость только от gameOver

    // Обработчик завершения игры (успех/провал) — вызывается после рендера
    useEffect(() => {
        if (!gameOver) return;

        // Вызываем колбэки асинхронно, чтобы не блокировать рендер
        if (success) {
            const timer = setTimeout(() => onSuccess?.(), 100);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => onFail?.(), 100);
            return () => clearTimeout(timer);
        }
    }, [gameOver, success, onSuccess, onFail]);

    const handleClick = useCallback(() => {
        if (gameOver) return;

        setProgress(prev => {
            const newProgress = Math.min(100, prev + 25);
            if (newProgress >= 75) {
                // Победа!
                setGameOver(true);
                setSuccess(true);
            }
            return newProgress;
        });
    }, [gameOver]);

    // Для кнопки "Продолжить" при провале
    const handleContinue = () => {
        onFail?.();
    };

    return (
        <div className="qte-game-overlay">
            <div className="qte-game-container">
                <div className="qte-game-header">
                    <h2 data-icon="gamepad"></h2>
                    <button className="qte-close" data-icon="close" onClick={onClose}></button>
                </div>

                <p className="qte-instruction">{instruction}</p>

                <div className="qte-bar-container">
                    <div className="qte-bar">
                        <div
                            className="qte-fill"
                            style={{ width: `${progress}%` }}
                            data-status={progress > 50 ? 'good' : 'bad'}
                        ></div>
                    </div>
                </div>

                <button
                    className="qte-action-btn"
                    onClick={handleClick}
                    disabled={gameOver}
                    data-icon={gameOver ? (success ? 'check' : 'cross') : 'tap'}
                >
                    <span className="btn-text"></span>
                </button>

                {gameOver && (
                    <div className="qte-result" data-result={success ? 'success' : 'fail'}>
                        <p data-icon={success ? 'trophy' : 'broken'}></p>
                        {!success && (
                            <button onClick={handleContinue} data-icon="continue">
                                <span>Продолжить</span>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}