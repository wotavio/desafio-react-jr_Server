const express = require("express");
const app = express();
const port = 3000;
const router = require("./../Router/index");
const conexao = require("./../conexao/conexao");
const tabela = require("./../conexao/tabela");

tabela.init(conexao);
router(app);

app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro");
        return;
    }
    console.log("Ta rodando meu guri!");
});

