import { useState } from 'react';
import './QuizGame.css';

export default function QuizGame({ title, questions, onComplete, onClose }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setShowResult(true);
            setTimeout(() => onComplete?.({ score, total: questions.length }), 2000);
        }
    };

    return (
        <div className="quiz-game-overlay">
            <div className="quiz-game-container">
                <div className="quiz-game-header">
                    <h2 data-icon="brain"></h2>
                    <button className="quiz-close" data-icon="close" onClick={onClose}></button>
                </div>

                {!showResult ? (
                    <>
                        <p className="quiz-progress">Вопрос {currentQuestion + 1} из {questions.length}</p>
                        <p className="quiz-question">{questions[currentQuestion]?.text}</p>
                        <div className="quiz-answers">
                            {questions[currentQuestion]?.answers.map((answer, i) => (
                                <button
                                    key={i}
                                    className="quiz-answer"
                                    data-correct={answer.isCorrect}
                                    onClick={() => handleAnswer(answer.isCorrect)}
                                >
                                    {answer.text}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="quiz-result" data-result={score > questions.length / 2 ? 'success' : 'fail'}>
                        <p data-icon={score > questions.length / 2 ? 'trophy' : 'broken'}></p>
                        <h3>Результат: {score} из {questions.length}</h3>
                    </div>
                )}
            </div>
        </div>
    );
}