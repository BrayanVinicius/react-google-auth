# Trabalho de Desenvolvimento WEB - React + TypeScript
## Descrição do Projeto
Esta aplicação foi desenvolvida como parte da disciplina de Desenvolvimento WEB e Front-end. O objetivo principal é criar uma interface funcional em React que utiliza o ecossistema Google para autenticação e manipulação de dados de usuário.

A aplicação permite que o usuário realize login via conta Google e utilize essas informações para pré-preencher um formulário de cadastro, que gera um objeto JSON para validação de dados. O projeto adota práticas modernas de desenvolvimento, como componentes funcionais, hooks para gerenciamento de estado e uma interface responsiva com tema escuro.
### Funcionalidades
- **Autenticação Google OAuth 2.0:** Integração completa para login seguro, recuperando nome, e-mail e foto do perfil.
- **Navegação Estruturada:** Barra superior funcional que permite transitar entre a Home, Apresentação e Cadastro.
- **Página de Apresentação:** Seção detalhada sobre o desenvolvedor, incluindo formação acadêmica em Matemática e Engenharia de Software.
- **Formulário de Cadastro Inteligente:** Pré-preenchimento automático dos dados obtidos no login, com funcionalidade de geração de JSON em tempo real.
- **Persistência de Sessão:** Uso de localStorage para manter o estado do usuário logado mesmo após o recarregamento da página.
### Tecnologias Utilizadas
- **Vite:** Ferramenta de build e ambiente de desenvolvimento.
- **React:** Biblioteca principal para construção da UI.
- **TypeScript:** Tipagem estática para maior segurança e manutenção do código.
- **React Router:** Gerenciamento de rotas e navegação dinâmica.
- **@react-oauth/google & jwt-decode:** Gestão de autenticação e decodificação de tokens JWT.
- **CSS Modules:** Estilização modular e organizada.
### Estrutura do Projeto
O código está organizado de forma a facilitar a escalabilidade e reutilização:
- `/src/components`: Contém as páginas da aplicação (Home, Apresentacao, Cadastro) e o componente de Layout.
- `/src/assets`: Recursos estáticos como imagens e fotos.
- `router.tsx`: Configuração das rotas da aplicação.
- `App.module.css`: Estilização centralizada com variáveis de tema escuro.
## Instruções para Execução Local
Siga os passos abaixo para rodar o projeto em sua máquina:
1. **Clonar o repositório:**
```Bash
git clone https://github.com/BrayanVinicius/react-google-auth-json.git
```
2. **Instalar as dependências:**
```Bash
npm install
```
3. **Configurar o Client ID do Google:**
No arquivo onde o GoogleOAuthProvider está configurado, insira o seu Client ID gerado no console do Google Cloud.
4. Iniciar o servidor de desenvolvimento:
```Bash
npm run dev
```
5. **Acessar no navegador:**
Abra o link indicado pelo terminal (geralmente http://localhost:5173).
## Deploy da Aplicação
O projeto está publicado e pode ser acessado online através do link abaixo:
[Vercel](https://react-google-auth-gamma.vercel.app/)