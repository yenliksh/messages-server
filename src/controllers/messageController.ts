import { Request, Response } from "express";
import { getMessages, addMessage } from "../services/messageService";

export const getAllMessages = (req: Request, res: Response) => {
  res.json(getMessages());
};

export const createMessage = (req: Request, res: Response) => {
  const { message } = req.body;
  addMessage(message);
  res.status(201).send();
};
