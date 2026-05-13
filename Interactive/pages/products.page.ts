import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto("/products");
    await this.expectTitle(/All Products/i);
  }

  async expectProductsPageLoaded() {
    await expect(
      this.page.getByRole("heading", { name: /All Products/i })
    ).toBeVisible();
    await expect(this.page.locator("#search_product")).toBeVisible();
    await expect(
      this.page.getByRole("heading", { name: /Category/i })
    ).toBeVisible();
    await expect(
      this.page.getByRole("heading", { name: /Brands/i })
    ).toBeVisible();
  }

  async searchForProduct(productName: string) {
    await this.page.locator("#search_product").fill(productName);
    await this.page.locator("#submit_search").click();
  }

  async expectSearchResults(productName: string) {
    await expect(
      this.page.getByRole("heading", { name: /Searched Products/i })
    ).toBeVisible();
    await expect(this.page.locator(".features_items")).toContainText(productName);
  }

  async openFirstProductDetails() {
    await this.page.getByRole("link", { name: /View Product/i }).first().click();
  }
}
