import { styled } from "styled-components";

export const Modal = styled.div`
  position: fixed; 
  display: flex;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: rgba(72, 66, 245, 0.9); 
  padding: 20px;
  z-index: 9999;
  border-radius: 20px;
  align-items: center;
`;

export const Botao = styled.button`
display: flex;
flex-direction: column;
justify-content: column;
height: 3vh;
width: 5vw;
border: none;
margin-left: 10px;
justify-content: center;
align-items: center;
 border: 1px solid #D9DADE;
 border-radius: 10px;
 color: blue;
margin: 8px;
 `;
export const Botao1 = styled.button`
display: flex;
flex-direction: column;
justify-content: column;
height: 4vh;
width: 8vw;
border: none;
justify-content: center;
align-items: center;
 border: 1px solid #D9DADE;
 border-radius: 10px;
 color: blue;
 margin-left: 20vw;
 margin-top: 2vh;
 `;

export const H1 = styled.h1`
color: #23238E;
text-align: center;
font-family: Arial Black;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 120%;
margin: 2vw;
margin-left: 2vw;
`;
export const H11 = styled.h1`
color: #23238E;
text-align: center;
font-family: Arial Black;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 120%;
margin-left: 3vw;
margin-right: 10vw;
`;

export const H12 = styled.h1`
color: white;
text-align: center;
font-family: Arial Black;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 120%;
margin-left: 10vw;
margin-right: 10vw;
`;

export const Tipos = styled.tr`
position: relative;
display: flex;
flex-direction: row;
width: 50vw;
align-items: center;
text-align: center;
margin-left: 25vw;
`;
export const Caixa = styled.tr`
position: relative;
display: flex;
flex-direction: row;
width: 50vw;
gap:2vh;
align-items: center;
text-align: center;
border-radius: 20px;
background-color: blue;
margin-left: 25vw;
margin-bottom: 2vh;
`;
export const Caixa1 = styled.tr`
position: relative;
display: flex;
flex-direction: row;
`;

export const Texto = styled.p`
display: flex;
flex-direction: row;
text-align: justify;
color: white;
width: 10vw;
align-items: center;
font-family: Arial;
font-size: 14px;
font-style: normal;
font-weight: 50;
line-height: normal;
margin-top: 1vh;
margin-left: 5vw;
`;
export const Textoo = styled.p`
display: flex;
flex-direction: row;
text-align: justify;
color: white;
width: 25vw;
font-family: Arial;
font-size: 14px;
font-style: normal;
font-weight: 50;
line-height: normal;
margin-top: 0;
margin-right: 5vw;
`;
export const Texto1 = styled.p`
display: flex;
flex-direction: row;
color: white;
width: 50vw;
font-family: Arial;
font-size: 14px;
font-style: normal;
font-weight: 50;
line-height: normal;
margin-top: 0;
`;
export const CustomInput = styled.input`
    background-color: white;
    height: 7vh;
    border-radius: 10px;
    width: 15vw;

    ::placeholder{
        margin-right: 5px;
        padding: 10px;;
    }
`;