'use client'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const initialMessages = [
  { text: "Hi there! Welcome to Fantasy Trading Room. I'm your AI assistant, here to help you with sports trading. I provide insights and analysis to help you make smarter decisions. Let's get started!", user: false }
];

const Chatbot = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { text: input, user: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage = { text: "This is a placeholder response.", user: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 500);
  };

  return (
    <div className='flex flex-row h-[calc(100vh-80px)]'>

      <div className='fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-white text-gray-800  p-4 y'>
        <div className='flex items-center justify-center mb-6'>
          <span className='font-bold text-lg'>Fantasy Trading Room</span>
        </div>
      </div>

      
      <div className="flex flex-col flex-grow ml-64 bg-gray-100">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.user ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xl px-4 py-2 rounded-lg ${message.user ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="p-4 bg-white">
          <div className="flex rounded-lg border border-gray-300 overflow-hidden">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 focus:outline-none text-gray-800"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
