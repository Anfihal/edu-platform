import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <h1 className="text insurance">страхование</h1>
            <h2 className="text or">или</h2>
            <button className="btn-start" onClick={() => navigate('/age-select')}>
                начать
            </button>
            <h2 className="text life">жизнь</h2>
        </section>
    );
}