import { test, expect } from '../fixtures'; // импортируем СВОЮ версию test, не из @playwright/test!

test('products page is visible', async ({ loginPage, page }) => {
    await expect(page.getByText('Products')).toBeVisible();
});

test('cart icon is visible', async ({ loginPage, page }) => {
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
});