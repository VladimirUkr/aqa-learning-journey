import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
});

test('products page is visible after login', async ({ page }) => {
    await expect(page.getByText('Products')).toBeVisible();
});

test('cart icon is visible after login', async ({ page }) => {
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
});