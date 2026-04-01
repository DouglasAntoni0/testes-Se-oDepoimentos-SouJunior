# QA E2E Tests

Este repositorio contem apenas a automacao E2E com Cypress e Playwright  do novo site da Sou Junior.

O site nao faz parte deste projeto. A ideia e:

1. Subir o site localmente no repositorio principal.
2. Abrir este repositorio em outra janela do VS Code.
3. Rodar os testes apontando para a URL local do site.

## O que ficou de fora

Os testes unitarios e os testes que dependem do `src` do projeto principal nao foram trazidos para ca, porque continuam acoplados ao codigo da aplicacao.

## Requisitos

- Node.js instalado
- Aplicacao rodando localmente
- URL do ambiente disponivel em `BASE_URL`

## Configuracao

Copie `.env.example` para `.env` e ajuste se precisar:

```env
BASE_URL=http://localhost:3000
```

## Instalacao

```bash
npm install
npm run playwright:install
```

## Execucao

Rodar Cypress:

```bash
npm run cypress:open
```

ou

```bash
npm run cypress:run
```

Rodar Playwright:

```bash
npm run playwright:test
```

Rodar ambos:

```bash
npm run test:e2e
```

## Fluxo recomendado para QA

1. No repositorio do site, subir a aplicacao.
2. Neste repositorio, instalar dependencias.
3. Confirmar que `BASE_URL` aponta para a aplicacao em execucao.
4. Executar Cypress e/ou Playwright.
