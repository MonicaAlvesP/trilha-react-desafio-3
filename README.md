# Formulário de Cadastro - Plataforma <img src="./src/assets/img/logo-dio 1.svg"/>

Este projeto é uma aplicação de front-end criada com React para simular uma página de cadastro de usuários, similar à da plataforma DIO. O formulário utiliza componentes estilizados, validação de campos e integração com uma API simulada para criação de usuários.

## Funcionalidades
- **Validação de Campos**: Verifica se os campos obrigatórios foram preenchidos corretamente e se os dados inseridos são válidos.
- **Feedback de Erros**: Exibe mensagens de erro em tempo real para orientar o usuário a corrigir os campos inválidos.
- **Navegação**: Utiliza React Router para navegação entre diferentes páginas da aplicação.
- **Login com Dados Mockados**: O login é realizado com dados mockados, não há suporte para criação de novos logins ainda. Devemos utilizar o usuário salvo no `db.json` para abrir a tela de projetos do usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled Components**: Biblioteca para estilizar componentes de forma modular e dinâmica.
- **Axios**: Cliente HTTP para fazer requisições para a API.
- **React Hook Form**: Biblioteca para manipulação de formulários com validação.
- **React Router**: Biblioteca para roteamento no React.
- **React Icons**: Biblioteca de ícones para usar com componentes de formulário.

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/MonicaAlvesP/trilha-react-desafio-3.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd trilha-react-desafio-3
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto:
   ```bash
   npm run dev
   ```

## Uso da API Mockada
Este projeto utiliza uma API mockada para simular o cadastro de usuários. Para iniciar a API local:
1. Execute o seguinte comando:
   ```bash
    npm run api
   ```
   Esse comando inicia a API mockada, permitindo que as requisições de cadastro sejam simuladas no endpoint ``http://localhost:3000/users``.

  
  **Nota:** _Certifique-se de manter a API rodando enquanto utiliza o projeto para que as requisições funcionem corretamente._

## Exemplo de Uso
1. Abra a aplicação no navegador após iniciar o projeto e a API mockada.
2. Na tela de login, insira um dos usuários presentes no arquivo `db.json`.
3. Clique no botão de login.
4. Se os dados estiverem corretos, você será redirecionado para a tela de projetos do usuário.

**Nota:** _Os dados de login devem corresponder exatamente aos presentes no `db.json` para que o login seja realizado com sucesso._

<details align="left">
  <sumary></sumary>
    <p>O projeto foi criado como parte de um desafio proposto pela <b>Digital Innovation One</b>.</p>
  <div align="right">
    Feito com 💜 por <a href="https://github.com/MonicaAlvesP?tab=repositories">MA</a>
  </div>
</details>