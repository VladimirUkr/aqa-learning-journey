import { test, expect } from '../fixtures'; // импортируем СВОЮ версию test, не из @playwright/test!

test('products page is visible', async ({ loginPage, page }) => {
    await expect(page.getByText('Products')).toBeVisible();
});

test('cart icon is visible', async ({ loginPage, page }) => {
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
});

test('add item to cart', async ({ loginPage, productsPage }) => {
  await productsPage.addToCart('Sauce Labs Backpack');
  expect(await productsPage.getCartCount()).toBe('1');
});

test('sort products by price low to high', async ({ loginPage, productsPage }) => {
  await productsPage.sortBy('lohi');
  const prices = await productsPage.getAllPrices();
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);
});

const productsToTest = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];

for (const productName of productsToTest) {
    test(`add ${productName} to cart`, async ({ loginPage, productsPage }) => {
        await productsPage.addToCart(productName);
        expect(await productsPage.getCartCount()).toBe('1');
    });
}