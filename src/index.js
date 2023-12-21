import cors from 'cors';
import express from 'express';
import http from 'http';
import router from './routes.js';

const app = express();

//Criando um server para a aplicação
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.use(cors());

server.listen(port, () => console.log(`Servidor inciado na parta ${port}`));

