class Tabelas {
    init(conexao) {
      this.conexao = conexao;
      this.criarTabelaProdutos();
    }
  
    criarTabelaProdutos() {
      const sql = `
          CREATE TABLE IF NOT EXISTS produtos (
          ID_PRODUTO INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          DESC_PRODUTO VARCHAR(255) NOT NULL,
          VALOR_PRODUTO INT NOT NULL,
          DT_CREATED DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(ID_PRODUTOS)
      );
        `;
      this.conexao.query(sql, (error) => {
        if (error) {
          console.log("Erro na hora de criar a tabela PRODUTOS");
          console.log(error.message);
          return;
        }
        console.log("Criada a tabela com sucesso...");
      });
    }
  }
  
  module.exports = new Tabelas();