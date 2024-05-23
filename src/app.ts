import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import messageRoutes from "./routes/messageRoutes";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/messages", messageRoutes);

export default app;
