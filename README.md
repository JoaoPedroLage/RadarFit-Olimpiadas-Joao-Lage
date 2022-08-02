# :package: Desafio técnico: RadarFit Olimpiadas 
por João Lage

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

### Tópicos

- [Imagens do projeto](#camera-imagens-do-projeto)

- [Descrição do projeto](#man_dancing-descrição-do-projeto)

- [Melhorias possíveis](#construction-melhorias-possíveis)

- [Stacks utilizadas](#books-stacks-utilizadas)

- [Etapa mais desafiadora](#goberserk-etapa-mais-desafiadora)

- [Abrir e rodar o projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)

- [Feedback sobre o desafio](#recycle-feedback-sobre-o-desafio)


# :camera: Imagens do projeto

<spam>
  <img src="https://im.ge/i/Screenshot-6-.FAbI7W" alt="ranking" width="1000"/>
  <img src="https://im.ge/i/Screenshot-7-.FAb06L" alt="Cadastro de resultados de competições" width="1000"/>
</spam>

# :man_dancing: Descrição do Projeto

Desafio proposto pela RadarFit, onde:

- Back-end:
  * API REST em Python ou NodeJS para o COR (Comitê Olimpíco Radar), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

    Competição de hidratação: maior quantidade em L de água, vence.

    Competição de yoga: maior tempo fazendo yoga vence.

    Competição de perda de peso: maior quantidade de calorias perdidas vence.

    Competição de dardos: maior distância entre os lançamentos vence.

O que foi realizado dentre o proposto:
- [x] Criar uma competição.
- [x] Finalizar uma competição.
- [x] Cadastrar resultados para uma competição.
- [x] A API não aceita cadastros de resultados se a competição já estiver encerrada.
- [x] Retornar o ranking da competição, exibindo a posição final de cada participante.
- [x] A API pode retorna o ranking/resultado parcial, caso a disputa ainda não estiver encerrada.
- [x] Os rankings consideraram as unidades.
- [ ] No lançamento de dardos, cada atleta tem 3 chances, o resultado da competição leva em conta o lançamento mais distante de cada atleta.
- [x] Testes.

# :construction: Melhorias possíveis:

- Aumentar a cobertura de testes para o back-end.
- Melhorar regra de negócio ao retornar o ranking da competição.
- Implementar regra de negócio para a contagem da pontuação no lançamento de dardos.
- Subir a aplicação para o HEROKU.
- Dockerizar a aplicação.

# :books: Stacks utilizadas

### Back-end
- [TypeScript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/) 
- [Nodemon](https://www.npmjs.com/package/nodemon) 
- [Zod](https://www.npmjs.com/package/zod)
- [Express](https://expressjs.com/pt-br/) 
- [Mocha](https://mochajs.org/)
- [Chai](https://www.npmjs.com/package/chai)
- [Sinon](https://sinonjs.org/)

# :goberserk: Etapa mais desafiadora

- Utilizar o TypeScript com excelencia e aplicar POO para criar uma aplicação de fácil manutenibilidade e com facilidade para implentar novas features.
- Realizar regras de negocio para retornar o ranking da competição como esperado.
- Pontuando um outro desafio foi começar um projeto back-end do zero, mas foi incrível perceber que sou capaz de contruir uma API em um prazo tão curto.

# 🛠️ Abrir e rodar o projeto

1. Clone o repositório
  * `git clone git@github.com:JoaoPedroLage/RadarFit-Olimpiadas-Joao-Lage.git`
  * Tente rodar o script na pasta que você acabou de clonar:
    * `bash start.sh`
  * Não funcionou pra você? Então entre na pasta do repositório que você acabou de clonar:
    * `cd backend`


2. Instale as dependências e inicialize
  * Instale as dependências no back-end:
    * `npm install`
  * Inicialize o projeto:
    * Inicialize o seu servidor MySQL
    * Coloque as suas variáveis de ambiente em um arquivo .env ou diretamente em back-end\src\database\config\config.ts.
    * Na pasta do back-end execute no seu terminal `npm start` (o back-end começará a rodar na porta 3001, o script irá popular um banco de dados com base nas variáveis de ambiente).

##  API Documentation
   . Endpoints e atributos das tabelas do banco de dados
   
   #### Create the item

  * Para cadastrar uma nova Competição realizar Post no endpoint: "http://localhost:3001/competitions", insira os dados de acordo com esse exemplo:
   {
        "competition_name": "competição yoga",
   },
   
```http
  POST /competitions/
```
   #### Update one item
      
   * Para finalizar uma Competição realizar Patch no endpoint: "http://localhost:3001/competitions/" e inserir o id da competição, depois /finish.
   
   ```http
     PATCH /competitions/1/finish
   ```
   
    * o retorno será algo como:
      {
          "message": "Competition successfully finished",
          "competition": {
              "id": 1,
              "competition_name": "competição yoga",
              "in_progress": false
          }
       }
   
      *Para cadastrar resultados de uma nova Competição realizar Post no endpoint: "http://localhost:3001/competitions_results",
      insira os dados de acordo com esse exemplo:
      {
        "competition_name": "competição yoga",
        "athelete_name": "Joao das Neves",
        "value": 10,
        "unit": "s"
      },
    
    * Para ver o ranking realizar Get no endpoint: "http://localhost:3001/ranking", o retorno será algo como:
    [
        {
            "competition_name": "competição yoga",
            "1º": "Joao das Neves: 10 s",
            "2º": "Joao das Neves: 600 s"
        },
        {
            "competition_name": "competição hidratacao",
            "1º": "Claudio: 1000 ml",
            "2º": "Claudio: 10 ml"
        }
    ]

# :recycle: Feedback sobre o desafio

- A regra de negócio para retornar o ranking da competição foi a parte mais dificil para mim, acredito que com com a ajuda de um Senior Lead eu consegueria realizar essa tarefa com mais destreteza e com muito mais eficiência, continuarei a tentar a solução.
- Outro ponto que gostaria de expor, é que eu me identifiquei de verdade com a empresa e a proposta de trabalho, como mencionei na entrevista, o que mais prezo em um emprego é um ambiente de trabalho seguro e confortável para eu poder ser o mais produtivo possível, eu sinceramente, senti que a RadarFit passa esse sentimento, desde já agradeço a oportunidade.
- No mais, foi um ótimo desafio. Coloquei em prática muitos dos meus conhecimentos do NodeJs, TypeScript e POO.
