# 🚀 QA E2E Tests - SouJunior WebApp

Este repositório contém a automação de testes E2E (End-to-End) utilizando **Cypress** e **Playwright** para o novo site da **SouJunior**.

## 🎯 Sobre o Projeto e Minha Atuação

Este projeto é um **trabalho voluntário** desenvolvido de forma **100% autônoma** por mim. Tomei a iniciativa de estruturar toda esta suíte de testes com o intuito de colaborar ativamente com a equipe e com o projeto da SouJunior, garantindo a máxima qualidade no lançamento da plataforma e aliviando a carga mental do time.

Construir esta arquitetura de testes do zero é uma forma valiosa que encontrei para aplicar na prática meus conhecimentos em Quality Assurance, demonstrar forte proatividade, autonomia e gerar impacto real. Estou utilizando essa experiência prática para expandir minha expertise na área de Q.A. (Quality Assurance) e testes automatizados, com o objetivo claro de comprovar meu valor e **conquistar uma oportunidade profissional no mercado de tecnologia**.

---

## 🏗️ Estrutura e Abordagem

O código-fonte do site não faz parte deste repositório (desacoplamento). A estrutura de testes funciona da seguinte maneira:

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
