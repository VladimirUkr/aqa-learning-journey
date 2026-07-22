import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly sortDropdown: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortDropdown = page.locator('.product_sort_container');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async sortBy(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    async addToCart(productName: string) {
        const productItem = this.page.locator('.inventory_item', { hasText: productName });
        await productItem.getByRole('button', { name: 'Add to cart' }).click();
    }

    async getCartCount(): Promise<string | null> {
        return await this.cartBadge.textContent();
    }
}