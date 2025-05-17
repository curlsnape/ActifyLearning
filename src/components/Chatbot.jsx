// Chatbot.js
import React, { useState } from "react";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!query.trim()) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: query }]);

    // Fetch response from backend
    try {
      const res = await fetch(
        `http://localhost:3000/search?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setMessages([
        ...messages,
        { sender: "user", text: query },
        { sender: "bot", text: data.answer },
      ]);
    } catch (error) {
      setMessages([
        ...messages,
        { sender: "user", text: query },
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }

    setQuery("");
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
