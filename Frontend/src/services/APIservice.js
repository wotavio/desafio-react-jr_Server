import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export async function getProdutos() {
    try {
        const response = await axios.get(`${API_URL}/produtos`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getDetalhesProduto(id) {
    try {
        const response = await axios.get(`${API_URL}/produtos/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateProduto = async (id, dadosAtualizacao, produtoAtual) => {
    try {
        console.log("Esses sao as infos originais", produtoAtual)
        console.log("Essas sao as att", dadosAtualizacao)
        const response = await axios.put(`${API_URL}/produtos/${id}`, dadosAtualizacao, produtoAtual);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteProduto = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/produtos/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};