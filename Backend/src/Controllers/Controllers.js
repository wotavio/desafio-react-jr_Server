const produtoModel = require("./../models/models");
class ProdutoController {
  async buscar() {
      try {
          const listaProduto = await produtoModel.listar();
          return listaProduto; 
      } catch (error) {
          throw error; 
      }
  }
  async buscarDetalhes(id) {
    try {
        const detalhesProduto = await produtoModel.listar2(id);
        return detalhesProduto;
    } catch (error) {
        throw error;
    }
}

  async criar(dadosProduto) {
      try {
          const produtoCriado = await produtoModel.criar(dadosProduto);
          return produtoCriado;
      } catch (error) {
          throw error; 
      }
  }

  async atualizar(id, dadosProduto) {
      try {
          const produtoAtualizado = await produtoModel.atualizar(id, dadosProduto);
          return produtoAtualizado;
      } catch (error) {
          throw error; 
      }
  }

  async deletar(id) {
      try {
          await produtoModel.deletar(id);
          return { message: "Produto deletado com sucesso" }; 
      } catch (error) {
          throw error; 
      }
  }
}

module.exports = new ProdutoController();
