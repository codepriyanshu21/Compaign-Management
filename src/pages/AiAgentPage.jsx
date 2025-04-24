import React, { useState } from 'react';

const AiAgentPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'agent', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: input.trim(),
    };

    setMessages([...messages, newMessage]);
    setInput('');

    // Simulated AI agent response
    setTimeout(() => {
      const agentResponse = {
        id: messages.length + 2,
        sender: 'agent',
        text: `You said: "${input.trim()}". How can I help further?`,
      };
      setMessages(prevMessages => [...prevMessages, agentResponse]);
    }, 1000);
  };

  const handleInputChange = (e) => setInput(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-6 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-6">AI Agent Chat</h1>

      <div className="flex-1 overflow-y-auto mb-4 border rounded-lg p-4 bg-white shadow-sm flex flex-col gap-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs break-words ${
                msg.sender === 'agent'
                  ? 'bg-indigo-100 text-gray-800'
                  : 'bg-indigo-600 text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <textarea
          className="flex-1 border rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={2}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AiAgentPage;
