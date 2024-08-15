// src/components/Chat.tsx
import React, { useState } from 'react';
import Message from './Message';
import Form from './Form';

const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = (message: string) => {
        setMessages([...messages, `User: ${message}`]);
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, `AI: This is a dummy response to "${message}"`]);
        }, 1000); // Simulate a 1-second delay for AI response
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg} />
                ))}
            </div>
            <Form addMessage={addMessage} />
        </div>
    );
};

export default Chat;