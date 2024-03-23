# Desafio React Jr
![image](https://github.com/wotavio/desafio-react-jr_Server/assets/83969703/91545332-d16c-4f8e-bba9-0657b0809ad5)
![image](https://github.com/wotavio/desafio-react-jr_Server/assets/83969703/63fd26bc-0cb9-4812-a32e-0645c1209817)
![image](https://github.com/wotavio/desafio-react-jr_Server/assets/83969703/eacb6b15-09e3-4185-9225-479f2532b6d9)


## Passos para realizar o desafio

- Você deve criar um repositório para esse desafio. 
- Desenvolver as aplicações conforme descrito abaixo.
- Após finalizar, faça o push para seu repositório, revise seu código e envie por e-mail o endereço do repositório para que possamos analisar o código.



# Descritivo do desafio

## Backend
Fazer um backend em Node.js ou PHP, acessando um banco de dados (MySQL, Postgres ou MongoDB). Criar um banco de dados com uma única tabela, produtos, com os seguintes campos:
- codigo
- descricao
- preco
- data_cadastro

O backend tem que expor uma API Rest/JSON com suporte para um CRUD simples (inserção, atualização, consulta e exclusão).

## Frontend
Fazer uma aplicação em HTML, CSS e JS, caso tenha conhecimento, pode ser utilizado ReactJS. O frontend deve acessar a API do backend.

Fazer uma tela simples para exibir uma lista de produtos na tela, com os campos:

- codigo
- descricao

Cada item da lista precisa ter ações de editar, excluir e detalhes. Ao clicar em detalhes, deve exibir todos os campos daquele item:

- codigo
- descricao
- preco
- data_cadastro

# Observações
> Dica: Começar pelo backend

> Dica: Utililzar VS Code.

- Verificar o uso de Verbos HTTP para construção da API

- No frontend, mapear os dados retornados pela API para uma classe

-  O frontend pode ser bem simples, não é ncessário tela de login ou algo sofisticado, mas atentar para bom acabamento, não possuir bugs e ter os tratamentos de erros adequados, não dando mensagens de erro técnicas para o usuário e tratando dados inválidos de forma amigável.

- O programa pode ser minimalista, pode ter só o mínimo de funcionalidade necessária para realizar as operações pedidas e nada mais.

- **Opcional**: Separar a camada de comunicação com o banco da camada da API (controller)

- **Opcional**: Rodar o backend e o banco de dados em um container.
