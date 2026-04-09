import { useNavigate } from 'react-router-dom';
import './AgeSelector.css';

export default function AgeSelector() {
    const navigate = useNavigate();

    const ages = [
        { key: '0+', label: '0+', class: 'age-0' },
        { key: '12+', label: '12+', class: 'age-12' },
        { key: '16+', label: '16+', class: 'age-16' },
        { key: '18+', label: '18+', class: 'age-18' },
    ];

    const handleSelect = (ageKey) => {
        const encodedAge = encodeURIComponent(ageKey);
        navigate(`/age/${encodedAge}/home`);
    };

    return (
        <section className="age-selector">
            {/* Фон — в CSS */}
            <div className="age-bg"></div>

            {/* Заголовок — стили в CSS */}
            <header className="age-header">
                <h1 className="age-title">
                    <span className="title-part">выбери</span>
                    <span className="title-part">свой</span>
                    <span className="title-part">возраст</span>
                </h1>
            </header>

            {/* Кнопки — стили + иконки в CSS */}
            <div className="age-grid">
                {ages.map((age) => (
                    <button
                        key={age.key}
                        className={`age-button ${age.class}`}
                        data-age-key={age.key}
                        onClick={() => handleSelect(age.key)}
                    >
                        <span className="age-label">{age.label}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}