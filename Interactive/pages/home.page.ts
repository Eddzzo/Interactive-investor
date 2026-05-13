import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto("/");
    await this.expectTitle(/Automation Exercise/i);
  }

  async expectHeroContent() {
    await expect(
      this.page.getByRole("heading", {
        name: /Full-Fledged practice website for Automation Engineers/i
      })
    ).toBeVisible();
  }
}
