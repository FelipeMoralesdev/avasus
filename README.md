# AVASUS - Ambiente Virtual de Aprendizagem do SUS

## Descrição

Esse projeto foi criado para o Edital Nº 28/2023 – LAIS/UFRN e consiste na implementação do front-end de uma plataforma para visualização de módulos educacionais, parceiros e indicadores de transparência pública. O projeto seguiu o protótipo disponivel no [ Figma](https://www.figma.com/file/XJsAwuVR119flXvVD3dx6u/Edital-001%2F2023?type=design&node-id=0-1&mode=design&t=svyXGVb9wCxg4VO6-0).


## Instalação

1. Clone este repositório.
2. Instale as dependências: `npm install`
3. Inicie o aplicativo: `npm start`

## Tecnologias Utilizadas

O projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app) e utiliza as bibliotecas: [Bootstrap](https://getbootstrap.com/), [Charts.js](https://github.com/chartjs/Chart.js), e [HighCharts](https://www.highcharts.com/).

## Funcionalidades

O projeto apresenta 5 telas principais:
- Página Inicial
- Listagem de Módulos Educacionais
- Informações sobre Módulos Educacionais
- Listagem dos Parceiros
- Dados de Transparência

As páginas são dinâmicas e por meio da [API](https://github.com/lais-huol/edital-001-23-modulos-educacionais), o projeto oferece informações sobre cursos, avaliações, número de usuários, parceiros e transparência. 

Na página principal, é possível selecionar cursos pela avaliação, número de usuários ou data de criação mais recente. A listagem de módulos permite a visualização de todos os cursos e seleção por categoria. A listagem de parceiros permite a visualização de todos os parceiros da plataforma. Em "Informações sobre Módulos Educacionais", o usuário tem acesso a todas informações disponíveis do curso selecionado. O mapa de transparência fornece dados sobre a plataforma, usuários por curso e um mapa interativo.

### Responsividade

O projeto foi desenvolvido com foco na responsividade, garantindo uma experiência de usuário consistente em diferentes dispositivos e tamanhos de tela. Os elementos da interface foram projetados para se ajustarem automaticamente, proporcionando uma navegação intuitiva tanto em desktops quanto em dispositivos móveis.
