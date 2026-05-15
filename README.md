<p align="center">
  <img src="https://soujunior.tech/assets/logoPrincipal-BiqxuLdz.svg" alt="SouJunior Logo" width="220" />
</p>

<h1 align="center">🛡️ QA E2E Test Suite — SouJunior WebApp</h1>

<p align="center">
  <strong>Automação de testes End-to-End com cobertura dual-framework (Cypress + Playwright)</strong><br/>
  Repositório independente • Arquitetura desacoplada • Pronto para CI/CD
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Cypress-14.5-04C38E?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress" />
  <img src="https://img.shields.io/badge/Playwright-1.59-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Status-Em%20Expansão-blue?style=for-the-badge" alt="Status" />
</p>

---

## 👤 Sobre o Autor e Motivação

> **Douglas Antoni** — QA Engineer em formação, voluntário ativo na [SouJunior](https://soujunior.tech).

Este projeto foi **concebido, arquitetado e desenvolvido integralmente por mim**, de forma **100% autônoma e voluntária**. Não recebi nenhum direcionamento prévio ou template — toda a suíte foi construída do zero, desde a definição da estratégia de testes até a implementação final.

### Por que este projeto existe?

Identifiquei que a plataforma da SouJunior não possuía cobertura de testes E2E automatizados para o novo site. Em vez de esperar a demanda, **tomei a iniciativa** de construir esta infraestrutura com o objetivo de:

- 🎯 **Prevenir regressões** antes que cheguem ao usuário final
- 📊 **Estabelecer uma baseline de qualidade** mensurável para o time
- ⚡ **Acelerar o ciclo de releases** com validações automatizadas
- 🧱 **Criar uma base escalável** que qualquer membro do time possa expandir

> _"Qualidade não é apenas encontrar bugs — é construir confiança no software antes que ele chegue ao usuário."_

---

## 📊 Cobertura Atual

| Seção da Aplicação | Cypress | Playwright | Cenários |
|---|:---:|:---:|:---:|
| **Perguntas Frequentes (FAQ)** | ✅ | ✅ | 6 |
| **Depoimentos (Carrossel)** | ✅ | ✅ | 3 |
| **Nossas Iniciativas (Cards)** | ✅ | ✅ | 2+ |
| **Navegação — Menu Principal** | ✅ | ✅ | 1 |
| **Faça Parte (Comunidade)** | ✅ | ✅ | 2 |

**Total: 5 seções cobertas · 10 spec files · ~30 cenários de teste**

### Tipos de validação implementados

- ✅ Renderização e visibilidade de elementos
- ✅ Integridade de dados (textos, nomes, cargos, depoimentos)
- ✅ Carregamento real de imagens (`naturalWidth > 0`)
- ✅ Navegação de carrossel (avanço, retorno, estados de botões)
- ✅ Interação com accordion/FAQ (expandir, recolher, múltiplos abertos)
- ✅ Rotação de ícones (animação de seta 180°)
- ✅ Atributos de acessibilidade (`aria-expanded`, `aria-label`)
- ✅ Redirecionamentos externos (`window.open`, `target="_blank"`)
- ✅ Responsividade mobile (viewport iPhone X)
- ✅ Links com validação de `href`, `target` e `rel`

---

## 🏗️ Arquitetura do Projeto

```
qa-e2e-tests/
├── cypress/
│   ├── e2e/
│   │   ├── depoimentos.cy.js          # Carrossel de depoimentos
│   │   ├── façaparte.cy.js             # Seção "Faça Parte"
│   │   ├── iniciativas.cy.js           # Cards de iniciativas
│   │   ├── nossainiciativas.cy.js      # Navegação do menu
│   │   └── perguntasfrequentes.cy.js   # FAQ completo (6 cenários)
│   └── support/
│       └── e2e.js
├── tests/
│   └── playwright/
│       ├── depoimentos.spec.js
│       ├── façaparte.spec.js
│       ├── iniciativas.spec.js
│       ├── nossainiciativas.spec.js
│       └── perguntasfrequentes.spec.js
├── shared/
│   └── depoimentos.data.js            # Massa de dados compartilhada
├── cypress.config.js
├── playwright.config.js
├── package.json
└── .env.example
```

### Decisões técnicas relevantes

| Decisão | Justificativa |
|---|---|
| **Dual-framework (Cypress + Playwright)** | Demonstra domínio de ambos os frameworks líderes de mercado e permite comparação de abordagens |
| **Repositório desacoplado** | Os testes são independentes do código-fonte da aplicação — basta apontar para qualquer URL do site |
| **Massa de dados centralizada** | Arquivo `shared/` evita duplicação e facilita manutenção quando o conteúdo do site muda |
| **Configuração via `.env`** | Permite trocar a `BASE_URL` sem alterar código — funciona em local, staging ou produção |
| **Worker único no Playwright** | Garante execução sequencial para evitar race conditions em testes que manipulam o DOM |

---

## ⚡ Quick Start

### Pré-requisitos

- **Node.js** ≥ 18
- A aplicação da SouJunior rodando localmente (ou acessível via URL)

### 1. Clonar e instalar

```bash
git clone https://github.com/DouglasAntoni0/Testes-E2E-SouJunior.git
cd Testes-E2E-SouJunior
npm install
npx playwright install
```

### 2. Configurar ambiente

```bash
cp .env.example .env
```

Edite o `.env` se a aplicação rodar em uma porta diferente:

```env
BASE_URL=http://localhost:3000
```

### 3. Executar os testes

| Comando | Descrição |
|---|---|
| `npm run cypress:open` | Abre o Cypress em modo interativo (UI) |
| `npm run cypress:run` | Executa o Cypress em modo headless |
| `npm run playwright:test` | Executa o Playwright em modo headless |
| `npm run playwright:headed` | Executa o Playwright com o navegador visível |
| `npm run test:e2e` | Executa **ambos** os frameworks sequencialmente |

---

## 🔄 Workflow Recomendado

```
┌─────────────────────────────┐     ┌─────────────────────────────┐
│   Terminal 1                │     │   Terminal 2                │
│                             │     │                             │
│   📂 Repo do Site           │     │   📂 Este Repo (Testes)     │
│   $ npm start               │     │   $ npm run test:e2e        │
│                             │     │                             │
│   🌐 localhost:3000 ────────┼─────┼── BASE_URL apontando aqui   │
└─────────────────────────────┘     └─────────────────────────────┘
```

1. **Terminal 1** — No repositório principal do site, suba a aplicação (`npm start`)
2. **Terminal 2** — Neste repositório, execute os testes com o comando desejado
3. Os testes se conectam automaticamente à URL configurada no `.env`

---

## 🧠 O que ficou de fora (e por quê)

Os **testes unitários** e testes que dependem de acesso direto ao `src/` do projeto principal **continuam no repositório da aplicação**. Esta decisão é intencional:

- Testes unitários estão **acoplados ao código** — precisam importar componentes e módulos internos
- Testes E2E são **agnósticos à implementação** — interagem apenas com a interface renderizada
- Esta separação segue o princípio de **responsabilidade única** aplicado à infraestrutura de testes

---

## 🚀 Roadmap

- [ ] Cobertura da seção **Hero / Banner principal**
- [ ] Cobertura da seção **Footer** e links de redes sociais
- [ ] Cobertura do **Header** completo (navegação, logo, menu mobile)
- [ ] Testes de **acessibilidade automatizada** (axe-core)
- [ ] Testes de **performance** (Lighthouse CI)
- [ ] Integração com **GitHub Actions** para CI/CD automatizado
- [ ] Relatórios visuais com **Allure Report**

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Cypress-04C38E?style=for-the-badge&logo=cypress&logoColor=white" />
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
</p>

---

## 📫 Contato

**Douglas Antoni** · QA Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/douglas-antoni/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DouglasAntoni0)
[![Portfolio](https://img.shields.io/badge/Portfólio-000?style=for-the-badge&logo=netlify&logoColor=white)](https://douglasqa.netlify.app)

---

<p align="center">
  <sub>Feito com ☕ e dedicação por <strong>Douglas Antoni</strong> — Voluntário SouJunior</sub>
</p>
