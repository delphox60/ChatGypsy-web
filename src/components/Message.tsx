// src/components/Message.tsx
import React from 'react';

interface MessageProps {
    text: string;
    isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
    return (
        <div className={`message ${isUser ? 'user' : 'ai'}`}>
            <div className="bubble">{text}</div>
        </div>
    );
};

export default Message;