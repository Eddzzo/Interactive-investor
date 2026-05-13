import { expect, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export type UserRegistration = {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
};

export class AuthPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto("/login");
    await this.expectTitle(/Signup \/ Login/i);
  }

  async signup(user: UserRegistration) {
    await this.page.locator('[data-qa="signup-name"]').fill(user.name);
    await this.page.locator('[data-qa="signup-email"]').fill(user.email);
    await this.page.locator('[data-qa="signup-button"]').click();

    await expect(this.page.getByText(/Enter Account Information/i)).toBeVisible();
    await this.page.locator("#id_gender1").check();
    await this.page.locator('[data-qa="password"]').fill(user.password);
    await this.page.locator('[data-qa="days"]').selectOption("10");
    await this.page.locator('[data-qa="months"]').selectOption("5");
    await this.page.locator('[data-qa="years"]').selectOption("1995");
    await this.page.locator('[data-qa="first_name"]').fill(user.firstName);
    await this.page.locator('[data-qa="last_name"]').fill(user.lastName);
    await this.page.locator('[data-qa="address"]').fill(user.address);
    await this.page.locator('[data-qa="country"]').selectOption(user.country);
    await this.page.locator('[data-qa="state"]').fill(user.state);
    await this.page.locator('[data-qa="city"]').fill(user.city);
    await this.page.locator('[data-qa="zipcode"]').fill(user.zipCode);
    await this.page.locator('[data-qa="mobile_number"]').fill(user.mobileNumber);
    await this.page.locator('[data-qa="create-account"]').click();
  }

  async expectAccountCreated() {
    await expect(this.page.getByText(/Account Created!/i)).toBeVisible();
  }

  async continueAfterAccountCreation() {
    await this.page.locator('[data-qa="continue-button"]').click();
  }

  async expectLoggedInAs(name: string) {
    await expect(this.page.getByText(new RegExp(`Logged in as\\s+${name}`, "i"))).toBeVisible();
  }

  async logout() {
    await this.clickNavLink(/Logout/i);
  }

  async login(email: string, password: string) {
    await this.page.locator('[data-qa="login-email"]').fill(email);
    await this.page.locator('[data-qa="login-password"]').fill(password);
    await this.page.locator('[data-qa="login-button"]').click();
  }

  async deleteAccount() {
    await this.clickNavLink(/Delete Account/i);
    await expect(this.page.getByText(/Account Deleted!/i)).toBeVisible();
  }
}
