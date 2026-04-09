import { useState, useRef, useEffect } from 'react';
import './ChatWithAgent.css';

export default function ChatWithAgent({ onClose, storySlug }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Привет! Я ваш страховой агент. Расскажите, что случилось?',
            sender: 'agent',
            time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [photo, setPhoto] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handlePhotoSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsUploading(true);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto({
                    file: file,
                    preview: reader.result,
                    name: file.name
                });
                setIsUploading(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSend = () => {
        if (!inputText.trim() && !photo) return;

        const newMessage = {
            id: messages.length + 1,
            text: inputText,
            photo: photo,
            sender: 'user',
            time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
            storySlug: storySlug
        };

        setMessages([...messages, newMessage]);
        setInputText('');
        setPhoto(null);

        setTimeout(() => {
            const agentResponse = {
                id: messages.length + 2,
                text: 'Спасибо! Я получил ваше сообщение и фото. Скоро рассмотрю ваш случай и свяжусь с вами.',
                sender: 'agent',
                time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, agentResponse]);
        }, 2000);
    };

    return (
        <div className="chat-overlay">
            <div className="chat-container">
                {/* Шапка */}
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="agent-avatar" data-icon="agent"></div>
                        <div>
                            <h3>Страховой агент</h3>
                            <span className="agent-status">Онлайн</span>
                        </div>
                    </div>
                    <button className="chat-close-btn" onClick={onClose} data-icon="close"></button>
                </div>

                {/* Сообщения */}
                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`message ${msg.sender === 'user' ? 'message-user' : 'message-agent'}`}
                        >
                            {msg.sender === 'agent' && <div className="message-avatar" data-icon="agent"></div>}

                            <div className="message-content">
                                {msg.photo && (
                                    <div className="message-photo">
                                        <img src={msg.photo.preview} alt="Загруженное фото" />
                                    </div>
                                )}

                                {msg.text && <p>{msg.text}</p>}

                                <span className="message-time">{msg.time}</span>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Ввод сообщения */}
                <div className="chat-input-area">
                    {photo && (
                        <div className="photo-preview">
                            <img src={photo.preview} alt="Preview" />
                            <button
                                className="remove-photo"
                                onClick={() => setPhoto(null)}
                                data-icon="close"
                            ></button>
                        </div>
                    )}

                    <div className="chat-input-wrapper">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handlePhotoSelect}
                            accept="image/*"
                            capture="environment"
                            style={{ display: 'none' }}
                        />

                        <button
                            className="attach-btn"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isUploading}
                            data-icon={isUploading ? 'loading' : 'camera'}
                        ></button>

                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Напишите сообщение..."
                            className="chat-input"
                        />

                        <button
                            className="send-btn"
                            onClick={handleSend}
                            disabled={!inputText.trim() && !photo}
                            data-icon="send"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
}