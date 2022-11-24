# Projeto de ToDoList
### Projeto feito com MERN (Mongo + Express + React + NodeJs)
### Esse projeto foi feito para a avaliação final da matéria de laboratório de Engenharia de Software (C214). A ideia é simples, uma lista de tarefa onde o usuário consegue criar, visualizar, atualizar e remover tarefas. Todas as tarefas são armazenadas  em um database no MongoDB.
---
## 🚀 Começando

Primeiramente, é necessário realizar o clone do projeto. 

Se estiver utilizando Windows, siga os seguintes passos:

Crie um novo diretório em uma pasta qualquer
```
$ mkdir ToDolist
```

Entre na pasta criada
```
$ cd ToDolist
```

Clone o repositório utilizando a seguinte linha de comando
```
$ git clone https://github.com/lauracdias/ToDoList.git
```

Faça checkout na branch main, é nela que o código estará mais atualizado
```
$ git checkout main
```

Com o código na versão mais recente (na branch **main**) é possível identificar dois diretórios principais, denominados **front** e **server**. 

O diretório **front** contém a aplicação feita em react (HTML, CSS e JS) e o diretório **server** contém toda a conexão com o banco de dados, definições de rotas e funções que recebem argumentos para realizar os CRUD's.

---

## 📋 Instalação de dependências
O próximo passo para a execução do projeto, é realizar a instalação do **Node.js**, ele pode ser baixado no site oficial: https://nodejs.org/en/download/ e a instalação é bem simples e trivial. Para ter certeza que foi instalado corretamente, digite o seguinte comando: 

```
$ node -v
```
Se o terminal monstrar a versão baixada, signfica que o Node foi instalado com sucesso, caso contrário, repita o passo anterior.

Navegue até o diretório raiz do projeto e execute o seguinte comando para abrir o VSCode
```
$ code .
```

Após isso, é necessário instalar todas as dependências do projeto, é bem simples, já que ele contém um gerenciador de dependências. Como o projeto é separado entre o front-end e o back-end é necessário instalar dependências de ambos, já que são diferentes.

A partir do diretório raiz do projeto execute os seguintes comandos para instalar as dependências do front-end:

```
$ cd front
$ cd todo-list-app
$ npm install
```

O gerenciador de pactoes **npm** indetificará todas as dependências contidas no arquivo **package.json** e instalará todas automaticamente. Depois de instaladas, você verá uma pasta chamada **node_modules** contendo todas as dependências do projeto especificadas no **package.json**.

Após isso, é necessário instalar as dependências do back-end.

Novamente, a partir do diretório raiz do projeto execute os seguintes comandos para instalar as dependências do back-end:
```
$ cd server
$ npm install
```

Assim como no front-end o gerenciador de pactoes **npm** indetificará todas as dependências contidas no arquivo **package.json** e instalará todas automaticamente. Depois de instaladas, você verá uma pasta chamada **node_modules** contendo todas as dependências do projeto especificadas no **package.json**.

---

## 🔧 Executando o projeto

Após as instalações de todas as depedências do projeto, já é possível executá-lo! Mas antes é necessário um ajuste no back-end, é preciso conectar o projeto com o MongoDB. 

Para isso, entre no site do <a href="https://www.mongodb.com/">MongoDB</a> e crie uma conta. Com o site logado, crie um novo projeto.

![criando database](readmeAssets/Screenshot_1.jpg)

Dê um nome e clique em continuar e depois em criar.

![criando database](readmeAssets/Screenshot_2.jpg)

Crie um novo Database e selecione a opção grátis

![criando database](readmeAssets/Screenshot_3.jpg)

Clique em criar cluster

![criando database](readmeAssets/Screenshot_4.jpg)


Coloque um usuário e uma senha e clique em criar usuário, essa autenticação será utilizada no código para conexão do back-end

![criando database](readmeAssets/Screenshot_5.jpg)

Na tela de databases clique em connect

![criando database](readmeAssets/Screenshot_6.jpg)

Selecione a opção indicada na imagem e clieque em "Choose a connection method"

![criando database](readmeAssets/Screenshot_7.jpg)

Selecione a opção de conectar a sua aplicação 

![criando database](readmeAssets/Screenshot_8.jpg)

Copie a autenticação que aparece na tela e vamos colocar no código para a autenticação do nosso back-end, assim como descrito nos próximos passos

![criando database](readmeAssets/Screenshot_9.jpg)







































Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Diga como essa etapa será:

```
Dar exemplos
```

E repita:

```
Até finalizar
```

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* etc.