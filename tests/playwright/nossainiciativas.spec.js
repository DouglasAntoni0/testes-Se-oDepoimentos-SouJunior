import { test, expect } from '@playwright/test';

test.describe('Navegação do Menu Principal', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('localhost:3000');
    });

    test('Deve rolar a página até a seção "Nossas iniciativas" ao clicar no link do menu', async ({ page }) => {

        const linkMenu = page.locator('a[aria-label="Navegar para a página Nossas Iniciativas"]');
        const secaoDestino = page.locator('#nossas-iniciativas');

        await expect(linkMenu).toBeVisible();
        await linkMenu.click();
        await expect(secaoDestino).toBeInViewport();
        await expect(secaoDestino).toContainText('Nossas iniciativas');
    });
});
