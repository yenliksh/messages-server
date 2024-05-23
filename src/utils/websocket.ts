import WebSocket from "ws";
import { Server } from "http";

let wss: WebSocket.Server;

export const setupWebSocket = (server: Server) => {
  wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    ws.send(JSON.stringify({ type: "init", messages: getMessages() }));
  });
};

export const broadcast = (data: any) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

import { getMessages } from "../services/messageService";
