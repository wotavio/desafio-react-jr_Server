const { Router } = require("express");
const router = Router();
const produtoController = require("../Controllers/Controllers");

router.get("/produtos", async (req, res) => {
    try {
        const produtos = await produtoController.buscar();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.get("/produtos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await produtoController.buscarDetalhes(id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post("/produtos", async (req, res) => {
    try {
        const novoProduto = req.body;
        const produtoCriado = await produtoController.criar(novoProduto);
        res.status(201).json(produtoCriado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/produtos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const dadosAtualizacao = req.body;
        const produtoAtualizado = await produtoController.atualizar(id, dadosAtualizacao);
        res.status(200).json(produtoAtualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/produtos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const resposta = await produtoController.deletar(id);
        res.status(200).json(resposta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
