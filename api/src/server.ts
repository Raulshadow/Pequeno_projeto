import express from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * Put => Alterar
 * DELETE => Deletar
 * PATCH => Altaração especifica
 */

 app.get("/", (request, response) => {
     return response.json({message: "HELLO WORLD - NLW04"});
 });

 //1 param => Rota(recurso API)
 //2 param => Request Response

 app.post("/",(request, response) => {
     //recebeu dados para salvar
     return response.json({message: "Os dados foram salvos Com Sucesso."});
 });

app.listen(3333,() => console.log("Server is running!"));
