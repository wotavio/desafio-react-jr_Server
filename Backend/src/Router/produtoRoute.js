const {Router} = require("express");
const router = Router();
const produtoController = require("../Controllers/Controllers")

router.get("/produtos", (req, res) =>{
    const listaProduto = produtoController.buscar();
    listaProduto.then((produtos) => res.status(200).json(produtos))
    .catch((error) => res.status(400).json(error.message));
});
router.post("/produtos", (req, res) =>{
    const resposta = produtoController.criar();
    res.send(resposta)
});
router.put("/produtos/:id", (req, res) =>{
    const resposta = produtoController.atualizar(id);
    res.send(resposta)
});
router.delete("/produtos/:id", (req, res) =>{
    const resposta = produtoController.deletar(id);
    res.send(resposta)
});

module.exports = router;
