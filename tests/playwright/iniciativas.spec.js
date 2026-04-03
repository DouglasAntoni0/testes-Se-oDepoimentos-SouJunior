import { test, expect } from '@playwright/test';

test.describe('Seção: Nossas Iniciativas', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Força o scroll até a seção para acionar o lazy loading
    const section = page.locator('#nossas-iniciativas');
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();
  });

  test('Deve validar a integridade do card SouJunior Labs e o redirecionamento', async ({ page }) => {
    // Isola o card: encontra o H2 e sobe 2 níveis (..) no DOM, igual fizemos no Cypress
    const titulo = page.getByRole('heading', { name: 'SouJunior Labs', exact: true });
    const card = titulo.locator('..').locator('..');

    // Valida a imagem e garante que ela não está quebrada (naturalWidth > 0)
    const img = card.getByRole('img', { name: 'SouJunior Labs' });
    await expect(img).toBeVisible();

    // Executa um script dentro do navegador para checar a largura natural da imagem
    const isImageLoaded = await img.evaluate((elemento) => elemento.naturalWidth > 0);
    expect(isImageLoaded).toBeTruthy();

    await expect(titulo).toBeVisible();
    await expect(card.locator('p')).toContainText('Coloque em prática suas expertises em projetos reais');

    const popupPromise = page.waitForEvent('popup');
    await card.getByRole('button', { name: 'Acesse' }).click();

    // Captura a nova aba assim que ela abrir
    const novaAba = await popupPromise;

    // Valida se a URL da nova aba é a correta
    const targetUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd1IspO3Hwylce2kHtIsmyBAkH7p3VFmdYUmdL75YXZ-DSNBA/viewform';
    expect(novaAba.url()).toContain(targetUrl);
  });

  test('Deve validar a integridade do card SouJunior Talk e o redirecionamento', async ({ page }) => {
    // Isola o card do Talk
    const titulo = page.getByRole('heading', { name: 'SouJunior Talk', exact: true });
    const card = titulo.locator('..').locator('..');

    const img = card.getByRole('img', { name: 'SouJunior Talk' });
    await expect(img).toBeVisible();

    const isImageLoaded = await img.evaluate((elemento) => elemento.naturalWidth > 0);
    expect(isImageLoaded).toBeTruthy();

    await expect(titulo).toBeVisible();

    const textDescricao = 'Se você está procurando uma maneira de aprimorar seu inglês com pessoas reais, temos uma excelente notícia para você!';
    await expect(card.locator('p')).toHaveText(textDescricao);

    // Escuta e aguarda a nova aba do Discord ser aberta
    const popupPromise = page.waitForEvent('popup');
    await card.getByRole('button', { name: 'Acesse' }).click();
    const novaAba = await popupPromise;

    const linkDiscord = 'https://discord.com/invite/564CDre9F3';
    expect(novaAba.url()).toContain(linkDiscord);
  });
});
