// src/components/Chat.tsx
import React, { useState } from 'react';
import Message from './Message';
import Form from './Form';

const Chat = () => {
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);

    const addMessage = (message: string) => {
        setMessages([...messages, { text: message, isUser: true }]);
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: `This is a dummy response to "${message}"`, isUser: false }
            ]);
        }, 1000); // Simulate a 1-second delay for AI response
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} isUser={msg.isUser} />
                ))}
            </div>
            <Form addMessage={addMessage} />
        </div>
    );
};

export default Chat;