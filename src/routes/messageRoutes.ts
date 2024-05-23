import { Router } from "express";
import {
  getAllMessages,
  createMessage,
} from "../controllers/messageController";

const router = Router();

router.get("/", getAllMessages);
router.post("/", createMessage);

export default router;
