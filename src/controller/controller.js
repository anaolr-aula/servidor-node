const express = require("express");
const app = express();

const usuarioService = require("../service/service");

app.use(express.json());

app.get("/usuario",(req,res)=>{
    res.json(usuarioService.buscar());
});

app.post("/usuario",(req,res)=>{
    const usuario = req.body;
    usuarioService.adicionar(usuario);

    res.send("Usuário adicionado com sucesso!");
});

app.get("/site",(req,res)=>{
    res.send("Bem vindo ao servidor Node.js <br> Este é um exemplo de rota simples");
})

app.get("/calculo/:valor",(req,res)=>{
    const valor = Number(req.params.valor);
    res.send(usuarioService.calcular(valor));
});

module.exports = app;