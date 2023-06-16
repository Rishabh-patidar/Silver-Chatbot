import React, { useState } from 'react';
import ChatMessage from './components/ChatMessage';
import './App.css';

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleSendMessage = () => {
    setChatMessages([...chatMessages, { message: userMessage, sender: 'user' }]);
    // Call backend API or process the user message here and get the chatbot's response
    const chatbotResponse = 'This is the chatbot response';
    setChatMessages([...chatMessages, { message: chatbotResponse, sender: 'chatbot' }]);
    setUserMessage('');
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-heading">SILVER CHAT BOT</h1>
      <div className="chat-display">
        {chatMessages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} sender={msg.sender} />
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
