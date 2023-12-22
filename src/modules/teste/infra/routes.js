import { Router } from "express";
import { Controller } from "./controller.js";


export const testesRouters = Router();
const controller = new Controller();

testesRouters.get('/pegar/dados', controller.getTeste);
testesRouters.post('/enviar/dados', controller.postTeste);
testesRouters.put('/atualizar/dados', controller.putTeste);
testesRouters.delete('/deletar/dados', controller.deleteTeste);