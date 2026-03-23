# Technology Gym

Site de academia com apresentação de planos, atividades e matrícula online, com estrutura moderna e foco em experiência do usuário, performance e arquitetura escalável, utilizando React, TypeScript, Tailwind CSS e Vite.

O projeto inclui componentes reutilizáveis, formulário com validação robusta e estrutura preparada para expansão futura, seguindo boas práticas de desenvolvimento front-end.

---

## Tecnologias Utilizadas

- **React**: Construção de interfaces modernas e componentizadas
- **TypeScript**: Tipagem estática e maior segurança no código
- **Tailwind CSS**: Estilização utilitária e responsiva
- **Vite**: Build tool rápida e eficiente
- **React Hook Form**: Gerenciamento performático de formulários
- **Zod**: Validação de dados com schema tipado

---

## Funcionalidades

- Layout responsivo (desktop, tablet e mobile)
- Seções institucionais para academias:
  - Home
  - Atividades
  - Planos
  - Unidades
  - Horários

- Formulário de matrícula com:
  - Validação de campos
  - Máscaras de entrada
  - Feedback de erros em tempo real
  - Telemetria de funil (tentativa, inválido, sucesso e abandono por etapa)

- Observabilidade de runtime:
  - Captura de erros via Error Boundary
  - Captura de erros globais (`window.error` e `unhandledrejection`)
  - Coleta de eventos em `localStorage` para análise local

- Componentes reutilizáveis e escaláveis
- Estrutura organizada para fácil manutenção

---

## Preview do Projeto

![Preview 1](./public/readmeHome.png)
![Preview 2](./public/readmeText.png)

---

## Objetivo do Projeto

- componentização reutilizável
- validação robusta de formulários
- organização escalável
- experiência de usuário moderna
- código limpo e tipado

---

## Execução do Projeto

### Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- Node.js (versão LTS recomendada)
- npm ou yarn
- Git

---

### Passo a passo

Clone o repositório:

```
git clone https://github.com/anamartinsr/technology_gym.git
```

Acesse a pasta do projeto:

```
cd technology_gym
```

Instale as dependências:

```
npm install
```

Execute o projeto em ambiente de desenvolvimento:

```
npm run dev
```

---

## Acesso à Aplicação

Após iniciar, o projeto estará disponível em:

```
http://localhost:5173
```

---

## Build para Produção

Para gerar a versão otimizada:

```
npm run build
```

Preview da build:

```
npm run preview
```

---

## Qualidade de Testes

Além dos testes de componentes, o projeto agora cobre fluxos de integração de rotas e matrícula:

- Rota de matrícula carregando formulário completo
- Fluxo de erro (submissão inválida com mensagens de validação)
- Fluxo de sucesso (submissão válida + redirecionamento para confirmação)
- Rota inexistente (página 404)

Executar testes:

```
npm run test
```

---

## Observabilidade

O projeto registra métricas e eventos de uso para diagnóstico local e análise de funil:

- Eventos de matrícula:
  - `enrollment_submit_attempt`
  - `enrollment_submit_invalid`
  - `enrollment_submit_success`
  - `enrollment_submit_error`
  - `enrollment_stage_interaction`
  - `enrollment_abandonment`
- Erros de runtime:
  - `runtime_error` (Error Boundary, `window.error`, `unhandledrejection`)

Chaves de armazenamento local:

- `technology-gym-observability-events`
- `technology-gym-web-vitals`

---

## CI/CD (GitHub Actions + Vercel Preview)

O workflow em pull request para `main` executa automaticamente:

- Lint (`npm run lint`)
- Prettier check (`npm run format:check`)
- Testes (`npm run test`)
- Build (`npm run build`)
- Deploy de preview na Vercel (com comentário automático no PR)

Arquivo do pipeline:

- `.github/workflows/main.yml`

Para habilitar preview deploy no PR, configure os secrets do repositório:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

---

## Boas Práticas Aplicadas

- Componentes desacoplados
- Tipagem forte com TypeScript
- Validação centralizada com Zod
- Separação de dados e UI
- Responsividade mobile-first
- Fluxos de integração testados
- Observabilidade para erros e funil de conversão
- Qualidade automatizada em CI/CD

---

## Contribuições

Contribuições são bem-vindas.

Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias.

---

## Forks e Uso do Projeto

Você pode forkar, estudar, adaptar e evoluir este projeto livremente.
