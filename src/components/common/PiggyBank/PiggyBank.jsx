import './PiggyBank.css';

export default function PiggyBank({ budget, items = [] }) {
    return (
        <div className="piggy-bank">
            <div className="piggy-icon" data-icon="piggy"></div>
            <div className="piggy-info">
                <span className="piggy-label">Копилка</span>
                <span className="piggy-amount">{budget.toLocaleString()}₽</span>
            </div>

            {items.length > 0 && (
                <div className="piggy-items">
                    {items.map((item, index) => (
                        <span
                            key={index}
                            className="item-badge"
                            data-item={item}
                        ></span>
                    ))}
                </div>
            )}
        </div>
    );
}