# Projeto Crawler - Mercado Livre
Projeto para criação de uma api rest que consuma de um crawler fazendo buscas no mercado livre.

## **Iniciando**
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. 

## **Pré-requisitos:**
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- nodejs
- yarn ou npm
Para somente execução do projeto:
- Docker
Executar o comando `docker build -t crawler-ml .` na pasta do projeto, e quando 
terminar de gerar a imagem executar o comando `docker run -p 3333:3333 crawler-ml`
deixando a aplicação disponível em localhost:3333

## **Desenvolvido**
 - JavaScript
 - NodeJs

## **Libs utilizadas**
 - Express - para roteamente e padrão rest
 - Puppeteer - lib utilizada para crawler e navegação no mercado livre
 - Jest - Lib de testes 
 - Babel - compilador para tradução da tipagem em ambiente de produção
 - Sucrase - compilador para tipagem utilizada do es6 em ambiente de desenvolvimento
 - Nodemon - para desenvolvimento e automatização do restart do servidor ao sofrer alterações
 - Yup - utilizado para as validações dos parametros passados 

## **Execução pro projeto**
 - Para executar o projeto na própria máquina utilizando o yarn ou npm, basta rodar os seguintes comandos:
 ```yarn``` e logo após executar o comando ```yarn start```.
 - Para executar via docker utilizar os seguintes comandos `docker build -t crawler-ml .` na pasta do projeto, e quando 
terminar de gerar a imagem executar o comando `docker run -p 3333:3333 crawler-ml`
deixando a aplicação disponível em localhost:3333.



## **Arquitetura do projeto**
	__tests__/
    controllers/
    services/
    utils/
	src/
    app/
      controllers/
      services/
    app.js
    server.js



## **Exemplo de utilização**
- Request:
    ```
    post - localhost:3333/product/index

    json body:
    {
	"search": "cadeado",
	"int": 3
    }

    ```

- Response:
    ```

        [
            {
              "name": " Cadeado Segurança Aço Reforçado C/ Alarme Sonoro Casa ",
              "link": "https://produto.mercadolivre.com.br/MLB-1336178326-cadeado-seguranca-aco-reforcado-c-alarme-sonoro-casa-_JM?searchVariation=44560046400#searchVariation=44560046400&position=1&type=item&        tracking_id=90b14f66-0d89-4fc0-bffa-b4111ced7afe",
              "price": "44,50"
            },
            {
              "name": " Cadeado De Latão Lt-30 30mm Pado ",
              "link": "https://produto.mercadolivre.com.br/MLB-971589589-cadeado-de-lato-lt-30-30mm-pado-_JM?searchVariation=38300374498#searchVariation=38300374498&position=2&type=item&          tracking_id=90b14f66-0d89-4fc0-bffa-b4111ced7afe",
              "price": "19,90"
            },
            {
              "name": " Cadeado Segurança Aço Reforçado Com Alarme Sonoro Casa Moto ",
              "link": "https://produto.mercadolivre.com.br/MLB-1493231801-cadeado-seguranca-aco-reforcado-com-alarme-sonoro-casa-moto-_JM?searchVariation=53702445106#searchVariation=53702445106&position=3&       type=item&tracking_id=90b14f66-0d89-4fc0-bffa-b4111ced7afe",
              "price": "41,99",
              "store": {},
              "state": " "
            }
        ]

    ```
## **Autores**
- Adriano Martins de Oliveira Sousa.