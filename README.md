<img src="/src/BannerTextAnalyzer.jpg">

![Status](https://img.shields.io/static/v1?label=Status&message=CONCLU%C3%8DDO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)

## Índice

- [1. Resumo do projeto](#1-Resumo-do-projeto)
- [2. Ferramentas utilizadas](#2-ferramentas-utilizadas)
- [3. Funcionalidades](#3-funcionalidades)
- [4. Boilerplate](#4-boilerplate)
- [5. Objetivos de Aprendizagem](#5-objetivos-de-aprendizagem)
- [6. Testes](#6-testes)
- [7. Considerações finais](#7-Considerações-finais)

---

## 1. Resumo do projeto

Um analisador de texto é uma aplicação para extrair informações úteis de um texto utilizando diversas técnicas, como o processamento de linguagem natural (PLN),aprendizado de máquina (ML) e análise estatística. Essas aplicações podem fornecer uma variedade de métricas que oferecem informações básicas sobre o comprimento e a estrutura do texto, como contagem de palavras, contagem de caracteres, contagem de sentenças e contagem de parágrafos. Outras métricas incluem análise de sentimentos, que utiliza técnicas de PLN para determinar o tom geral positivo, negativo ou neutro do texto, e análise de legibilidade, que utiliza algoritmos para avaliar a complexidade e legibilidade do texto.

Em geral, as aplicações de análise de texto fornecem informações valiosas e métricas sobre os textos que podem ajudar os usuários a tomar decisões informadas e tirar conclusões significativas. Por meio do uso dessas ferramentas de análise, os usuários podem obter uma compreensão mais profunda dos textos.

Neste projeto, foi desenvolvida uma aplicação que permite a usuária analisar no navegador,
um texto inserido por ela, obtendo uma séria de indicadores e métricas específicas sobre caracteres, letras, números, etc.
O analisador de texto foi desenvolvido utilizando HTML, CSS e JavaScript.

- Este projeto foi desenvolvido de forma **individual**, com apoio da equipe e das colegas do Bootcamp de Desenvolvimento Front-end da **Laboratória**.
- O principal objetivo desse projeto é a aprendizagem e o desenvolvimento de habilidades técnicas e softskills.
- Não foi permitido o uso de frameworks de CSS (Bootstrap, Materialize, etc).
- O projeto foi realizado em 3 Sprints.

#### Deploy

A aplicação foi publicada (ou _deployed_) para que as usuárias da
web possam acessá-la.

Neste projeto, foi utilizado o _Github Pages_ para implantar o site: [Text Analyzer](https://camilasukhada.github.io/SAP012-text-analyzer/).

## 2. Ferramentas utilizadas

### Preparo do PC para trabalhar

+ Node.js
+ Git e GitBash
+ Playwright
+ Visual Studio Code

### Organização e planejamento

+ Trello: [Text Analyzer](https://trello.com/b/pqcyhlho/text-analyzer).

+ GitHub

### Linguagens

+ HTML

+ CSS

+ Vanilla JavaScript

## 3. Funcionalidades

A lista de funcionalidades é a seguinte:

1. A aplicação permite que a usuária insira um texto escrevendo-o
    em uma caixa de texto.

2. A aplicação calcula as seguintes métricas e atualiza o
    resultado em tempo real conforme a usuária escreve o texto:

    - **Contagem de palavras**: a aplicação é capaz de contar o número de
    palavras no texto de entrada e mostrar essa contagem para a usuária.
    - **Contagem de caracteres**: a aplicação é capaz de contar o número de
    caracteres no texto de entrada, incluindo espaços e sinais de
    pontuação, e mostra essa contagem para a usuária.
    - **Contagem de caracteres excluindo espaços e sinais de pontuação**:
    a aplicação é capaz de contar o número de caracteres no texto de
    entrada, excluindo espaços e sinais de pontuação, e mostra essa contagem
    para a usuária.
    - **Contagem de números**: a aplicação é capaz de contar quantos números há no
    texto de entrada e mostra essa contagem para a usuária.
    - **Soma total dos números**: a aplicação é capaz de somar todos os números que
    estão no texto de entrada e mostra o resultado para a usuária.
    - **Comprimento médio das palavras**: a aplicação é capaz de calcular o
    comprimento médio das palavras no texto de entrada e mostra esse valor para a usuária.

3. A aplicação permite limpar o conteúdo da caixa de texto ao clicar
    em no botão "LIMPAR TEXTO".

![Demonstração do analisador de texto](src/TextAnalyzerGif.gif "Demonstração do analisador de texto")

## 4. Boilerplate

A lógica deste projeto foi implementada em javascript. Não foi permitido o uso de bibliotecas e frameworks, apenas JavaScript puro, também conhecido como Vanilla Javascript.
Para começar este projeto, foi feito -fork_ e clone de um repositório da **Laboratória**, a partir do qual foi fornecida a estrutura básica com arquivos e configuração inicial de dependêncuas e testes, o _boilerplate_.
O _boilerplate_ continha a seguinte estrutura:

    ./
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── src
    │   ├── analyzer.js
    │   ├── index.html
    │   ├── index.js
    │   └── style.css
    └── test
        ├── .eslintrc
        └── analyzer.spec.js

### Scripts / arquivos implementados no desenvolvimento do projeto.
Para melhor modulação do projeto os arquivos implementados foram distruídos da seguinte forma:

- **`README.md`**

- **`src/index.html`**

- **`src/style.css`** 

- **`src/index.js`**

- **`src/analyzer.js`**
 
## 5. Objetivos de Aprendizagem

### HTML

- **Uso de HTML semântico**
O projeto tinha critérios que especificava o uso de `class`, `id`, `data-testid` `name`.

 
### CSS

- **Uso de seletores CSS**

- **Modelo de caixa (box model): borda, margem, preenchimento**

### Web APIs

- **Uso de seletores do DOM**: `querySelector` e `getElementById`.

- **Manipulação de eventos do DOM (ouvintes, propagação, delegação)**: `addEventListener`.

- **Manipulação dinâmica do DOM**:`textContent`.
      

### JavaScript

- **Tipos de dados primitivos**

- **Strings (cadeias de caracteres)**

- **Variáveis (declaração, atribuição, escopo)**

- **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

- **Uso de loops (while, for, for..of)**

- **Funções (parâmetros, argumentos, retorno)**

- **Testes unitários (unit tests)**

- **Módulos do ECMAScript (ES Modules)**

- **Uso de linter (ESLINT)**

- **Uso de identificadores descritivos (Nomenclatura e Semântica)**

### Controle de Versões (Git e GitHub)

- **GitHub: Criação de conta e repositórios, configuração de chaves SSH**

- **Git: Controle de versões com git (clone,status, add, commit, push, deploy)**

- **GitHub: Implantação com GitHub Pages**: A aplicação está implantada no GitHub Pages:
  [Text Analyzer](https://camilasukhada.github.io/SAP012-text-analyzer/).

### Foco na Usuária

- **Projetado e desenvolvido um produto ou serviço centrado nas usuárias**

### Design do Produto

- **O projeto foi desenvolvido respeitando os princípios básicos do design visual**: contraste, alinhamento e hierarquia.

- **O projeto escolheu como inspiração o seguinte modelo:**
<img src="/src/Inspiração TextAnalyzer.jpg">

## 6. Testes

Este projeto conta com 3 conjuntos de testes que ajudam a verificar se
os critérios mínimos de aceitação são cumpridos.

### Testes Unitários
![`npm run test`](https://img.shields.io/static/v1?label=npm%20run%20test&message=APROVADO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)

Um teste unitário é uma técnica de teste de software na qual se verifica
que cada componente individual de um programa ou sistema funcione corretamente
isoladamente. Em outras palavras, cada unidade de código é testada separadamente
para garantir que atenda aos requisitos e especificações.

Os testes unitários deste projeto executam os métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` e `getAverageWordLength` com diferentes argumentos e verificarão
se os valores retornados são os esperados.

Esses testes são executados com o comando `npm run test` como mostrado
na imagem a seguir:

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")

O _boilerplate_ inclui tarefas que executam [eslint] e
[htmlhint] para verificar o `HTML` e
`JavaScript` em relação a diretrizes de estilo. Ambas as tarefas são executadas
automaticamente antes de executar os testes unitários ao usar o comando
`npm run test`. No caso do `JavaScript`, é um arquivo de configuração
do `eslint` chamado `.eslintrc`, que contém informações mínimas sobre o parser
a ser usado (qual versão do JavaScript/ECMAScript), o ambiente (navegador neste caso)
e as regras recomendadas (`eslint:recommended`).
Em relação às próprias regras/diretrizes de estilo,
segue-se as recomendações _padrão_ tanto do `eslint` quanto do `htmlhint`.

### Testes de Critérios Mínimos de Aceitação
![`npm run test:oas`](https://img.shields.io/static/v1?label=npm%20run%20test:oas&message=APROVADO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)

Esses testes analisam os arquivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
e
[`style.css`](src/style.css)
para verificar se cumpre os
[critérios mínimos de aceitação](#6-critérios-de-aceitação-mínimos-do-projeto).
Cada critério está relacionado a um objetivo de aprendizado.

São executados todos esses testes com o comando `npm run test:oas`
como mostrado na imagem a seguir:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Também é possível executar os testes de cada grupo de objetivos de aprendizado
individualmente com os seguintes comandos:

- ![`npm run test:oas-html`](https://img.shields.io/static/v1?label=npm%20run%20test:oas-html&message=APROVADO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)
- ![`npm run test:oas-css`](https://img.shields.io/static/v1?label=npm%20run%20test:oas-css&message=APROVADO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)
- ![`npm run test:oas-web-api`](https://img.shields.io/static/v1?label=npm%20run%20test:oas-web-api&message=APROVADO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)
- ![`npm run test:oas-js`](https://img.shields.io/static/v1?label=npm%20run%20test:oas-js&message=APROVADO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)

#### Testes End-to-End
![`npm run test:e2e`](https://img.shields.io/static/v1?label=npm%20run%20test:e2e&message=APROVADO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)

Um teste end-to-end (E2E) é uma técnica de teste de software na qual se verifica
o funcionamento de todo o sistema, do início ao fim. Em outras palavras, é testado
o fluxo completo do software, simulando a interação da usuária com a aplicação,
para garantir que todas as partes do sistema funcionem corretamente em conjunto.

É possível executar esses testes com o comando `npm run test:e2e` como mostrado
na imagem a seguir:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

## 7. Considerações finais

A execução do projeto proporcionou a oportunidade de desenvolver muitas habilidades, técnicas e lifeskills. O conhecimento de linguagens, ferramentes e tecnologias, como também organização, planejamento, gestão de tempo, trabalho em equipe, comunicação e autoaprendizagem. Superar os desafios de um primeiro projeto trouxe satisfação e autoconfiança. Só a agradecer!

### Autora
---

<a href="https://github.com/camilasukhada">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/146760773?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Camila Sukhada</b></sub></a>


Feito por Camila de Oliveira Batista de Lara. Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Camila-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/camilasukhada/)](https://www.linkedin.com/in/camilasukhada/) 
[![Gmail Badge](https://img.shields.io/badge/-camilasukhada@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:camilasukhada@gmail.com)](mailto:camilasukhada@gmail.com)


