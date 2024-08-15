// src/components/Form.tsx
import React, { useState } from 'react';

interface FormProps {
    addMessage: (message: string) => void;
}

const Form: React.FC<FormProps> = ({ addMessage }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            addMessage(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="chat-form">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="chat-input"
            />
            <button type="submit" className="chat-submit">Send</button>
        </form>
    );
};

export default Form;