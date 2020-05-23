# Projeto Crawler - Mercado Livre
Projeto para criação de uma api rest que consuma de um crawler fazendo buscas no mercado livre.

## **Iniciando**
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. 

## **Pré-requisitos:**
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- [nodejs](https://nodejs.org/en/)
- yarn ou npm
Para somente execução do projeto:
- [Docker](https://www.docker.com/)
Executar o comando `docker build -t crawler-ml .` na pasta do projeto, e quando 
terminar de gerar a imagem executar o comando `docker run -p 3333:3333 crawler-ml`
deixando a aplicação disponível em localhost:3333

## **Desenvolvido**
 - JavaScript
 - NodeJs

## **Libs utilizadas**
 - [Express](https://expressjs.com/pt-br/) - para roteamente e padrão rest
 - [Puppeteer](https://github.com/puppeteer/puppeteer) - lib utilizada para crawler e navegação no mercado livre
 - [Jest](https://jestjs.io/) - Lib de testes.
 - [Babel](https://babeljs.io/) - O Babel é um conjunto de ferramentas usado principalmente para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores do JavaScript em navegadores ou ambientes atuais e mais antigos.
 - [Sucrase](https://github.com/alangpierce/sucrase) - Sucrase é uma alternativa ao Babel que permite construções de desenvolvimento super-rápidas. Em vez de compilar uma grande variedade de recursos de JS para poder trabalhar no Internet Explorer, o Sucrase assume que você está desenvolvendo com um navegador recente ou com o Node.js.
 - [Nodemon](https://github.com/remy/nodemon) - para desenvolvimento e automatização do restart do servidor ao sofrer alterações
 - [Yup](https://github.com/jquense/yup) - Yup é um construtor de esquema JavaScript para análise e validação de valor. Defina um esquema, transforme um valor para corresponder, valide a forma de um valor existente ou ambos.

## **Execução pro projeto**
 - Para executar o aplicativo pela avd do android sdk basta baixar os pacotes do package.json 
 utilizando o comando ``` yarn ou npm install ``` e logo após o download terminar, utilizar o comando ``` react-native run-android ```.



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
