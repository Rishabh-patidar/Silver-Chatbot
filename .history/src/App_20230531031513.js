// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         SILVER CHAT BOT
//       </header>
//     </div>
//   );
// }

// export default App;

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
    <div className="chat-container">
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
