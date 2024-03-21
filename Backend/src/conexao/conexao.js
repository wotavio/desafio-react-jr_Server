const mysql = require("mysql2");

const conexao = mysql.createConnection({
          "host": "127.0.0.1",
          "port": 3306,
          "user": "root",
          "password": "root",
          "database": "Desafio",
});

module.exports = conexao;