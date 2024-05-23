import { Message } from "../models/message";

const messages: Message[] = [];
const MAX_MESSAGES = 9;

export const getMessages = (): Message[] => messages;

export const addMessage = (message: string) => {
  if (messages.length >= MAX_MESSAGES) {
    messages.shift();
  }
  messages.push({ message });
  broadcast({ type: "new_message", message });
};

import { broadcast } from "../utils/websocket";
