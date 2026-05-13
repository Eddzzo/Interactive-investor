import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto("/view_cart");
    await this.expectTitle(/Checkout/i);
  }

  async expectEmptyCart() {
    await expect(this.page.getByText(/Cart is empty!/i)).toBeVisible();
  }

  async expectProductInCart(productName: string) {
    await expect(this.page.locator("#cart_info_table")).toContainText(productName);
  }
}
