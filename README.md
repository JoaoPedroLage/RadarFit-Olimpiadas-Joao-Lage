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
  <img src="https://github.com/williamnstolb/desafioGRX/blob/master/app/Images/TelaPrincipal.png" alt="Tela primária" width="400"/>
  <img src="https://github.com/williamnstolb/desafioGRX/blob/master/app/Images/TelaResultados.png" alt="Tela resultado" width="400"/>
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
- [ ] Testes.

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

- Relembrar o React foi bem desafiador, porém, acredito que mais desafiador ainda foi conectar o front com o back. Ainda não tinha feito algo do tipo e vários problemas surgiram, um deles foi a falta do CORS no backend, mesmo depois de configurar o AXIOS no front, ficava retornando erro e demorou um tempo para perceber o motivo.
- Pontuando um outro desafio foi começar um projeto full stack do zero, mas foi incrível perceber que as lembranças fluíam de forma natural no desenrolar do desafio.

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

3. Endpoints e atributos das tabelas do banco de dados
   Para cadastrar uma nova Competição realizar Post no endpoint: "http://localhost:3001/competitions", insira os dados de acordo com esse exemplo:
   {
        "competition_name": "competição yoga",
   },
   
   Para finalizar uma Competição realizar Patch no endpoint: "http://localhost:3001/competitions/" e inserir o id da competição, depois /finish, exemplo: "http://localhost:3001/competitions/1/finish".
   
   o retorno será algo como:
      {
          "message": "Competition successfully finished",
          "competition": {
              "id": 1,
              "competition_name": "competição yoga",
              "in_progress": false
          }
      }
   
   Para cadastrar resultados de uma nova Competição no endpoint: "http://localhost:3001/competitions_results", insira os dados de acordo com esse exemplo:
   {
        "competition_name": "competição yoga",
        "athelete_name": "Joao das Neves",
        "value": 10,
        "unit": "s"
    },
    
    Para ver o ranking realizar Get no endpoint: "http://localhost:3001/ranking", o retorno será algo como::
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

- Uma das regras pede para dispor um contador que fica vermelho caso seja extrapolada uma das duas regras da caixa de texto
(mínimo de 15 e máximo de 200 caracteres), sendo que uma opção do HTML é justamente criar o limite máximo, não deixando ultrapassar. Uma forma que vejo
para melhorar seria não ter a regra de caracteres máximo, mas ter uma regra de que o botão enviar ficaria desabilitado no caso de passar de 200,
nesse momento ficaria vermelho o contador. Não é muito funcional, mas seria bom para testar lógica.
- Outro ponto que gostaria de expor, é que adorei a pergunta na entrevista inicial sobre a nota que eu dava pra cada stack, isso me fez procurar mais sobre bootstrap
e apliquei nesse desafio.
- No mais, foi um ótimo desafio. Me fez lembrar muita coisa sobre ReactJs e colocar em prática alguns conhecimentos do NodeJs. Fora que me fez olhar para CSS
com mais agrado. 
