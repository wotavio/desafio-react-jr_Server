const produtoModel = require("./../models/models");
class ProdutoController {
    buscar(req, res) {
        const listaProduto = produtoModel.listar();
        return listaProduto 
          .then((produtos) => res.status(200).json(produtos))
          .catch((error) => res.status(400).json(error.message));
      }
      criar(req, res) {
        const novoProduto = req.body;
        const produto = produtoModel.criar(novoProduto);
        return produto
          .then((produtoCriado) => res.status(201).json(produtoCriado))
          .catch((error) => res.status(400).json(error.message));
      }
      atualizar(req, res) {
        const { id } = req.params;
        const produtoAtualizado = req.body;
        const produto = produtoModel.atualizar(produtoAtualizado, id);
        return produto
          .then((resultprodutoAtualizado) =>
            res.status(200).json(resultprodutoAtualizado)
          )
          .catch((error) => res.status(400).json(error.message));
      }
      deletar(req, res) {
        const { id } = req.params;
        const produto = produtoModel.delete(id);
        return produto
          .then((resultprodutoDeletado) =>
            res.status(200).json(resultprodutoDeletado)
          )
          .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new ProdutoController();