import React from 'react';

function ChatMessage({ message, sender }) {
  return (
    <div className={`chat-message ${sender}`}>
      {message}
      Hii Guys
    </div>
  );
}

export default ChatMessage;
