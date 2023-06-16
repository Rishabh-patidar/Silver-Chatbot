import React, { useState } from 'react';
import ChatMessage from './components/ChatMessage';
import './App.css';
import ChatbotLogo from './image/1570440734590.jpg';

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
      <div className="header">
        
      </div>
      <Box sx={{ position: "relative" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                position: { xs: "relative", lg: "absolute" },
                height: { xs: "auto", lg: "100vh" },
                right: { xs: "auto", lg: "5px" },
                top: { lg: "-30px" },
                margin: "0 auto",
                width: "90%"
              }}
            >
              <img src={ChatbotLogo} alt="Chatbot Logo" className="chatbot-logo" />
        <h1 className="chatbot-heading">SILVER CHAT BOT</h1>
            </Box>
          </Box>
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
