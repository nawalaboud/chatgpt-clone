export enum SenderType {
  User = 'user',
  Bot = 'bot'
}

export type MessageData = {
  id: string;
  text: string;
  sender: SenderType;
};


