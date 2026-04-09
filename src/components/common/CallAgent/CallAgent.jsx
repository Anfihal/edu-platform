import { useState, useEffect } from 'react';
import './CallAgent.css';

export default function CallAgent({ onClose, agentPhone = '+7 (999) 123-45-67' }) {
    const [callStatus, setCallStatus] = useState('idle');
    const [callDuration, setCallDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isSpeakerOn, setIsSpeakerOn] = useState(false);

    useEffect(() => {
        let interval;
        if (callStatus === 'connected') {
            interval = setInterval(() => {
                setCallDuration(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [callStatus]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startCall = () => {
        setCallStatus('calling');
        setTimeout(() => {
            setCallStatus('connected');
        }, 3000);
    };

    const endCall = () => {
        setCallStatus('ended');
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    return (
        <div className="call-overlay">
            <div className="call-container">
                {/* Аватар агента */}
                <div className="call-agent-avatar">
                    <div className="avatar-circle" data-icon="agent"></div>
                    <h2>Страховой агент</h2>
                    <p className="agent-phone">{agentPhone}</p>

                    {callStatus === 'connected' && (
                        <p className="call-timer">{formatTime(callDuration)}</p>
                    )}

                    {callStatus === 'calling' && (
                        <p className="call-status">Вызов...</p>
                    )}
                </div>

                {/* Кнопки управления */}
                <div className="call-controls">
                    {callStatus === 'idle' && (
                        <button
                            className="call-btn call-start"
                            onClick={startCall}
                            data-icon="phone"
                        >
                            <span>Позвонить</span>
                        </button>
                    )}

                    {callStatus === 'calling' && (
                        <button
                            className="call-btn call-end"
                            onClick={endCall}
                            data-icon="phone-off"
                        >
                            <span>Отмена</span>
                        </button>
                    )}

                    {callStatus === 'connected' && (
                        <>
                            <div className="call-actions">
                                <button
                                    className={`action-btn ${isMuted ? 'active' : ''}`}
                                    onClick={() => setIsMuted(!isMuted)}
                                    data-icon={isMuted ? 'mic-off' : 'mic'}
                                >
                                    <span>{isMuted ? 'Включить' : 'Выключить'}</span>
                                </button>

                                <button
                                    className={`action-btn ${isSpeakerOn ? 'active' : ''}`}
                                    onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                                    data-icon={isSpeakerOn ? 'volume-up' : 'volume-down'}
                                >
                                    <span>Динамик</span>
                                </button>
                            </div>

                            <button
                                className="call-btn call-end"
                                onClick={endCall}
                                data-icon="phone-off"
                            >
                                <span>Завершить</span>
                            </button>
                        </>
                    )}

                    {callStatus === 'ended' && (
                        <p className="call-ended">Звонок завершён</p>
                    )}
                </div>
            </div>
        </div>
    );
}