import { useState } from 'react';
import MessageInput from './MessageInput';
import Message from './Message';
import { MessageData, SenderType } from '../types/message';

const ChatContainer = () => {

    const [messages, setMessages] = useState<MessageData[]>([]);

    const handleSend = (text: string) => {

        const userMessage: MessageData = { 
            id: crypto.randomUUID(), 
            text, 
            sender: SenderType.User 
        };

        const botMessage: MessageData = {
            id: crypto.randomUUID(),
            text: generateRandomResponse(),
            sender: SenderType.Bot
        };

        setMessages((prev) => [...prev, userMessage, botMessage]);
    }

    return (
        <div className="chat-container">
            <div className="message-area">
                {messages.map((msg) => (
                    <Message key={msg.id} text={msg.text} sender={msg.sender} />
                ))}
            </div>
            <div className="message-input">
                <MessageInput onSendMessage={handleSend} />
            </div>
        </div>
    );

};

function generateRandomResponse(): string {
    const responses = [
        'This is a simulated response.',
        'Interesting question!',
        'Nice insight!',
        'Thanks for your input!',
        'Absolutely! Here\'s a detailed explanation of...',
        'Thanks for sharing that!'
    ];

    const randomNumber = Math.floor(Math.random() * responses.length);
    return responses[randomNumber];
}


export default ChatContainer;
