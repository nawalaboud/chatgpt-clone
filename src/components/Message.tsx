import { MessageData, SenderType } from '../types/message';

const Message = ({ text, sender }: Omit<MessageData, 'id'>) => {
    return (
        <div className={`message ${sender === SenderType.User ? 'user' : 'bot'}`}>
            {text}
        </div>
    );
};

export default Message;
