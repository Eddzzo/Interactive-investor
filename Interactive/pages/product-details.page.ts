import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ProductDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get productInformation() {
    return this.page.locator(".product-information");
  }

  async expectLoaded() {
    await this.expectTitle(/Product Details/i);
    await expect(this.productInformation).toBeVisible();
  }

  async getProductName() {
    return (await this.productInformation.locator("h2").innerText()).trim();
  }

  async expectEssentialDetails() {
    await expect(this.productInformation.locator("h2")).toBeVisible();
    await expect(this.productInformation).toContainText("Category:");
    await expect(this.productInformation).toContainText("Availability:");
    await expect(this.productInformation).toContainText("Condition:");
    await expect(this.productInformation).toContainText("Brand:");
    await expect(this.productInformation.locator("span span")).toBeVisible();
  }

  async addToCart(quantity = 1) {
    await this.page.locator("#quantity").fill(String(quantity));
    await this.page.getByRole("button", { name: /Add to cart/i }).click();
  }

  async viewCartFromModal() {
    await this.page.getByRole("link", { name: /View Cart/i }).click();
  }
}
