import React, { useState, useEffect, useRef } from 'react';
import "./Style.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState('');
  const [hover, setHover] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      user: 'User',
      text: text.trim(),
    };

    addMessage(userMessage);
    setText('');

    setTimeout(() => {
      const replyMessage = {
        id: Date.now() + 1,
        user: 'Bot',
        text: 'This is an auto reply!',
      };
      addMessage(replyMessage);
    }, 1000);
  };

  return (
    <div className="cw-container">
      <header className="cw-header">
        💬 Let's Chat!
      </header>
      <div className="cw-window">
        {messages.map((msg) => (
          <div key={msg.id} className="cw-message-container">
            <div className={msg.user === 'User' ? 'cw-user-message' : 'cw-bot-message'}>
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form className="cw-input-container" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="cw-input"
        />
        <button
          type="submit"
          className={`cw-button ${hover ? 'cw-button-hover' : ''}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
