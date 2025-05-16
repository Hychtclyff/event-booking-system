// // import "dotenv/config";
import http from "http";
import { app } from "./configs/app.js";
// import listEndpoints from 'express-list-endpoints';
// import { initializeWebSocket } from "./configs/websocket.js";

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

const server = http.createServer(app);
// initializeWebSocket(server);

try {
   
    server.listen(port, () => {
        console.log(`🚀 Server is on ${host}:${port}`);
    });
} catch (error) {
    console.log(`Error: ${error.message}`);
}