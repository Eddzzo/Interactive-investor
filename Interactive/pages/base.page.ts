import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path = "/") {
    await this.page.goto(path);
    await this.dismissConsentIfVisible();
  }

  async dismissConsentIfVisible() {
    const consentButton = this.page.getByRole("button", { name: /Consent/i });
    if (await consentButton.isVisible().catch(() => false)) {
      await consentButton.click();
    }
  }

  navLink(name: RegExp | string): Locator {
    return this.page.getByRole("link", { name });
  }

  async clickNavLink(name: RegExp | string) {
    await this.navLink(name).click();
    await this.dismissConsentIfVisible();
  }

  async expectTitle(title: RegExp | string) {
    await expect(this.page).toHaveTitle(title);
  }
}
