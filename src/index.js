import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import produtosRouter from "./routers/produtosRouter.js";
import usuariosRouter from "./routers/usuariosRouter.js";

const server = express();
server.use(cors({ origin: "*" }));
server.use(express.json());

const port = process.env.PORT || 3000;

server.use(produtosRouter);
server.use(usuariosRouter);

server.listen(port, () => {
  console.log(`Servidor executando na porta ${port}.`);
  console.log(`Acesse em: http://localhost:${port}`);
});



// HTTP
// - GET    (Buscar)
// - POST   (Salvar)
// - PUT    (Editar)
// - DELETE (Apagar)

// HTTP status
// - 200 Sucesso
// - 201 Salvo com sucesso
// - 400 Requisição Inválido
// - 401 Não autorizado 
// - 404 Não encontrado
// - 500 Erro no servidor