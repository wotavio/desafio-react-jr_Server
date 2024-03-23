const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./../Router/index");
const conexao = require("./../conexao/conexao");
const tabela = require("./../conexao/tabela");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

tabela.init(conexao);
router(app);

app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro");
        return;
    }
    console.log("Ta rodando meu guri!");
});

