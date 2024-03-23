import React, { useState, useEffect } from 'react';
import { getProdutos, getDetalhesProduto, updateProduto, deleteProduto } from '../services/APIservice';
import { Modal, Texto, Botao, Caixa, H1, Texto1, Textoo, Tipos, H11, H12, CustomInput, Botao1} from "./styled";

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [detalhesProduto, setDetalhesProduto] = useState(null);
  const [showModalDetalhes, setShowModalDetalhes] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [produtoAtual, setProdutoAtual] = useState({ ID_PRODUTO: null, DESC_PRODUTO: '', VALOR_PRODUTO: null, DT_PRODUTO: new Date() });

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const produtosData = await getProdutos();
      setProdutos(produtosData);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const handleDetalhesClick = async (idProduto) => {
    try {
      const detalhesArray = await getDetalhesProduto(idProduto);
      const detalhes = detalhesArray[0];
      setDetalhesProduto(detalhes);
      setShowModalDetalhes(true);
    } catch (error) {
      console.error('Erro ao buscar detalhes do produto:', error);
    }
  };

  const handleEditarClick = (produto) => {
    setProdutoAtual(produto);
    setShowModalEditar(true);
  };
  
  const handleAtualizarProduto = async () => {
    try {
      const dataFormatada = new Date(produtoAtual.DT_PRODUTO).toISOString().slice(0, 19).replace('T', ' ');
      const dadosAtualizados = {
        ...produtoAtual,
        DT_PRODUTO: dataFormatada
      };
  
      await updateProduto(produtoAtual.ID_PRODUTO, dadosAtualizados);
      fetchProdutos(); 
      setShowModalEditar(false); 
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };
  

  const handleExcluirClick = async (idProduto) => {
    try {
      await deleteProduto(idProduto);
      fetchProdutos(); 
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModalDetalhes(false);
    setShowModalEditar(false);
  };
  

  return (
    <div>
      <H1>Lista de Produtos</H1>
      <table>
        <thead>
          <Tipos>
            <H11>Código</H11>
            <H11>Descrição</H11>
            <H11>Ações</H11>
          </Tipos>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <Caixa key={produto.ID_PRODUTO}>
              <Texto>{produto.ID_PRODUTO}</Texto>
              <Textoo>{produto.DESC_PRODUTO}</Textoo>
              <td>
                <Botao onClick={() => handleDetalhesClick(produto.ID_PRODUTO)}>Detalhes</Botao>
                <Botao onClick={() => handleEditarClick(produto)}>Editar</Botao>
                <Botao onClick={() => handleExcluirClick(produto.ID_PRODUTO)}>Excluir</Botao>
              </td>
            </Caixa>
          ))}
        </tbody>
      </table>

      {showModalDetalhes && detalhesProduto && (
        <Modal className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <H12>Detalhes do Produto</H12>
            <Texto1>Código: {detalhesProduto.ID_PRODUTO}</Texto1>
            <Texto1>Descrição: {detalhesProduto.DESC_PRODUTO}</Texto1>
            <Texto1>Valor: {detalhesProduto.VALOR_PRODUTO}</Texto1>
            <Texto1>Data: {detalhesProduto.DT_PRODUTO}</Texto1>
          </div>
        </Modal>
      )}

      {showModalEditar && (
        <Modal className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <H12>Editar Produto</H12>
          <CustomInput type="text" value={produtoAtual.DESC_PRODUTO} onChange={(e) => setProdutoAtual(prevState => ({ ...prevState, DESC_PRODUTO: e.target.value }))} placeholder="Descrição" />
          <CustomInput type="number" value={produtoAtual.VALOR_PRODUTO} onChange={(e) => setProdutoAtual(prevState => ({ ...prevState, VALOR_PRODUTO: e.target.value }))} placeholder="Valor" />
          <CustomInput type="date" value={produtoAtual.DT_PRODUTO} onChange={(e) => setProdutoAtual(prevState => ({ ...prevState, DT_PRODUTO: e.target.value }))} placeholder="Data" />
          <Botao1 onClick={handleAtualizarProduto}>Salvar</Botao1>
        </div>
      </Modal>
    )}
  </div>
);
};

export default App;