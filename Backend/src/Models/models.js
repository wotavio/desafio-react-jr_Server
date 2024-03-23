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
  listar2(id) {
    const sql = "SELECT * FROM produtos WHERE ID_PRODUTO = ?";
    return this.executaQuery(sql, id);
  }

  criar(novoProduto) {
    const sql = "INSERT INTO produtos SET ?";
    return this.executaQuery(sql, novoProduto);
  }

  atualizar(id, produtoAtualizado) {
    const sql = "UPDATE produtos SET DESC_PRODUTO = ?, VALOR_PRODUTO = ?, DT_PRODUTO = ? WHERE ID_PRODUTO = ?";
    const { DESC_PRODUTO, VALOR_PRODUTO, DT_PRODUTO } = produtoAtualizado;
    return this.executaQuery(sql, [DESC_PRODUTO, VALOR_PRODUTO, DT_PRODUTO, id]);
}

  deletar(id) {
    const sql = "DELETE FROM produtos WHERE ID_PRODUTO = ?";
    return this.executaQuery(sql, id);
  }
}

module.exports = new produtoModel();
