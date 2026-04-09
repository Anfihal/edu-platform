import { useState, useEffect } from 'react';
import './ClickerGame.css';

export default function ClickerGame({ title, target, timeLimit, onComplete, onClose }) {
    const [clicks, setClicks] = useState(0);
    const [timeLeft, setTimeLeft] = useState(timeLimit || 10);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (gameOver) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setGameOver(true);
                    setTimeout(() => onComplete?.({ clicks, success: clicks >= (target || 10) }), 1000);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [gameOver, clicks, target, onComplete]);

    const handleClick = () => {
        if (gameOver) return;
        setClicks(prev => prev + 1);
    };

    return (
        <div className="clicker-game-overlay">
            <div className="clicker-game-container">
                <div className="clicker-game-header">
                    <h2 data-icon="finger"></h2>
                    <button className="clicker-close" data-icon="close" onClick={onClose}></button>
                </div>

                <p className="clicker-instruction">{title || 'Быстро нажимай!'}</p>

                <div className="clicker-stats">
                    <div className="stat">
                        <span data-icon="tap"></span>
                        <span className="stat-value">{clicks}</span>
                    </div>
                    <div className="stat">
                        <span data-icon="time"></span>
                        <span className="stat-value">{timeLeft}с</span>
                    </div>
                </div>

                <button
                    className="clicker-button"
                    onClick={handleClick}
                    disabled={gameOver}
                    data-icon="tap"
                >
                    <span>НАЖМИ!</span>
                </button>

                {gameOver && (
                    <div className="clicker-result" data-result={clicks >= (target || 10) ? 'success' : 'fail'}>
                        <p data-icon={clicks >= (target || 10) ? 'trophy' : 'broken'}></p>
                        <h3>{clicks} нажатий!</h3>
                    </div>
                )}
            </div>
        </div>
    );
}