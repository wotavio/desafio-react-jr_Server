const conexao = require("./../conexao/conexao");
class produtoModel {
  executaQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if (error) {
          return reject(error);
        }
        return resolve(resposta);
      });
    });
  }
  listar() {
    const sql = "SELECT * FROM produtos";
    return this.executaQuery(sql);
  }

  criar(novoProduto) {
    const sql = "INSERT INTO produtos SET ?";
    return this.executaQuery(sql, novoProduto);
  }

  atualizar(produtoAtualizado, id) {
    const sql = "UPDATE produtos SET ? WHERE ID_PRODUTO = ?";
    return this.executaQuery(sql, [produtoAtualizado, id]);
  }

  delete(id) {
    const sql = "DELETE FROM produtos WHERE ID_PRODUTO = ?";
    return this.executaQuery(sql, id);
  }
}

module.exports = new produtoModel();