import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAgeContent } from '../data/ageContent';
import './AgeHomeTemplate.css';

export default function AgeHomeTemplate() {
    const navigate = useNavigate();
    const { age } = useParams();
    const decodedAge = decodeURIComponent(age);
    const content = getAgeContent(decodedAge);

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    // Храним реальную ширину карточки + gap, вычисленную из DOM
    const [itemWidth, setItemWidth] = useState(0);

    if (!content) {
        return <div className="error-page">Возраст не найден</div>;
    }

    const navigateWithinAge = (path) => {
        const encodedAge = encodeURIComponent(decodedAge);
        navigate(`/age/${encodedAge}${path}`);
    };

    // Функция для получения актуальной ширины одного элемента (карточка + gap)
    const updateItemWidth = useCallback(() => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const firstCard = container.querySelector('.story-card');
        if (!firstCard) return;

        // Получаем реальную ширину карточки (включая border/padding, но у нас box-sizing: border-box)
        const cardRect = firstCard.getBoundingClientRect();
        // Получаем gap из computed style или вычисляем через разницу между карточками
        const track = container.querySelector('.carousel-track');
        let gap = 0;
        if (track) {
            const children = track.children;
            if (children.length >= 2) {
                const first = children[0].getBoundingClientRect();
                const second = children[1].getBoundingClientRect();
                gap = second.left - first.right;
            } else {
                // fallback: берём из CSS, но проще вычислить
                const style = getComputedStyle(track);
                gap = parseFloat(style.gap) || 24;
            }
        }
        setItemWidth(cardRect.width + gap);
    }, []);

    // Обновляем ширину при монтировании, ресайзе и изменении контента
    useEffect(() => {
        updateItemWidth();
        window.addEventListener('resize', updateItemWidth);
        return () => window.removeEventListener('resize', updateItemWidth);
    }, [updateItemWidth, content.stories.length]);

    // Плавная прокрутка к индексу (без ручного расчёта, используем scrollIntoView)
    const goToSlide = useCallback((index) => {
        if (!carouselRef.current || itemWidth === 0) return;
        const container = carouselRef.current;
        const cards = container.querySelectorAll('.story-card');
        if (cards[index]) {
            cards[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            // Индекс обновится в handleScroll, но на всякий случай ставим сразу
            setCurrentIndex(index);
        }
    }, [itemWidth]);

    const nextSlide = () => {
        if (currentIndex < content.stories.length - 1) {
            goToSlide(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    };

    // Отслеживаем скролл для синхронизации active точки
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel || itemWidth === 0) return;

        const handleScroll = () => {
            const scrollLeft = carousel.scrollLeft;
            // Вычисляем индекс на основе реальной ширины элемента
            // Добавляем половину ширины, чтобы округление было точным
            const newIndex = Math.round(scrollLeft / itemWidth);
            const clampedIndex = Math.min(Math.max(0, newIndex), content.stories.length - 1);
            if (clampedIndex !== currentIndex) {
                setCurrentIndex(clampedIndex);
            }
        };

        carousel.addEventListener('scroll', handleScroll);
        // Вызываем один раз, чтобы установить начальный индекс
        handleScroll();

        return () => carousel.removeEventListener('scroll', handleScroll);
    }, [itemWidth, currentIndex, content.stories.length]);

    // Дополнительно: блокируем конфликт скролла после goToSlide (scrollIntoView генерирует scroll-события)
    // Это уже корректно обрабатывается handleScroll.

    return (
        <section className="age-home" data-age={decodedAge}>
            <div className="age-home-bg"></div>

            <header className="age-home-header">
                <button className="back-btn" onClick={() => navigate('/age-select')}>
                    Назад
                </button>
                <button className="settings-btn" onClick={() => alert('Настройки')}></button>
            </header>

            <main className="age-home-content">
                <h1 className="age-home-title">{content.title}</h1>
                <p className="age-home-subtitle">{content.subtitle}</p>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-btn left"
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                    />
                    <div className="carousel-container" ref={carouselRef}>
                        <div className="carousel-track">
                            {content.stories.map((story) => (
                                <article
                                    key={story.id}
                                    className="story-card"
                                    data-story-id={story.id}
                                    data-category={story.category}
                                    onClick={() => navigateWithinAge(`/stories/${story.slug}`)}
                                >
                                    <div className="story-image"></div>
                                    <div className="story-info">
                                        <h3>{story.title}</h3>
                                        <p className="story-description">{story.description || ''}</p>
                                        <button className="story-btn">Открыть</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <button
                        className="carousel-btn right"
                        onClick={nextSlide}
                        disabled={currentIndex >= content.stories.length - 1}
                    />
                </div>

                <div className="pagination-dots">
                    {content.stories.map((_, index) => (
                        <button
                            key={index}
                            className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Перейти к истории ${index + 1}`}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
}