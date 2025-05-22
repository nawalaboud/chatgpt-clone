import React, { useRef } from 'react';

type MessageInputProps = {
    onSendMessage: (text: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = () => {
        const text = textareaRef.current?.value.trim();
        if (!text) {
            return;
        }

        onSendMessage(text);

        if (textareaRef.current) {
            textareaRef.current.value = '';
        }
    };

    const handleEnterKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="message-input">
            <textarea
                ref={textareaRef}
                onKeyDown={handleEnterKey}
                placeholder="Type a message..."
            />
            <button onClick={handleSubmit}> Send </button>
        </div>
    );
};

export default MessageInput;
