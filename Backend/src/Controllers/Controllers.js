const produtoModel = require("./../models/models");
class ProdutoController {
  async buscar() {
      try {
          const listaProduto = await produtoModel.listar();
          return listaProduto; // Apenas retorna os dados
      } catch (error) {
          throw error; // Lança o erro para ser capturado pelo router
      }
  }

  async criar(dadosProduto) {
      try {
          const produtoCriado = await produtoModel.criar(dadosProduto);
          return produtoCriado; // Apenas retorna os dados
      } catch (error) {
          throw error; // Lança o erro para ser capturado pelo router
      }
  }

  async atualizar(id, dadosProduto) {
      try {
          const produtoAtualizado = await produtoModel.atualizar(id, dadosProduto);
          return produtoAtualizado; // Apenas retorna os dados
      } catch (error) {
          throw error; // Lança o erro para ser capturado pelo router
      }
  }

  async deletar(id) {
      try {
          await produtoModel.deletar(id);
          return { message: "Produto deletado com sucesso" }; // Retorna uma mensagem de sucesso
      } catch (error) {
          throw error; // Lança o erro para ser capturado pelo router
      }
  }
}

module.exports = new ProdutoController();
