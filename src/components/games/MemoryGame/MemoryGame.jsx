import { useState, useEffect } from 'react';
import './MemoryGame.css';

export default function MemoryGame({ title, onComplete, onClose }) {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);

    useEffect(() => {
        // Генерация карточек (4 пары для простоты)
        const icons = ['shield', 'phone', 'heart', 'piggy'];
        const deck = [...icons, ...icons]
            .sort(() => Math.random() - 0.5)
            .map((icon, index) => ({ id: index, icon }));
        setCards(deck);
    }, []);

    const handleCardClick = (id) => {
        if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;

        setFlipped(prev => [...prev, id]);

        if (flipped.length === 1) {
            setMoves(prev => prev + 1);

            const first = cards.find(c => c.id === flipped[0]);
            const second = cards.find(c => c.id === id);

            if (first.icon === second.icon) {
                setMatched(prev => [...prev, first.id, second.id]);
                setFlipped([]);

                if (matched.length + 2 === cards.length) {
                    setTimeout(() => onComplete?.({ moves, success: true }), 1000);
                }
            } else {
                setTimeout(() => setFlipped([]), 1000);
            }
        }
    };

    return (
        <div className="memory-game-overlay">
            <div className="memory-game-container">
                <div className="memory-game-header">
                    <h2 data-icon="brain"></h2>
                    <div className="memory-stats">
                        <span data-icon="moves"></span>
                        <span className="stat-value">{moves}</span>
                    </div>
                    <button className="memory-close" data-icon="close" onClick={onClose}></button>
                </div>

                <div className="memory-grid">
                    {cards.map(card => (
                        <button
                            key={card.id}
                            className={`memory-card ${flipped.includes(card.id) ? 'flipped' : ''} ${matched.includes(card.id) ? 'matched' : ''}`}
                            onClick={() => handleCardClick(card.id)}
                            data-icon={flipped.includes(card.id) || matched.includes(card.id) ? card.icon : 'card'}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}