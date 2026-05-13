# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: signup-login.spec.ts >> Sign up, log in, and clean up account
- Location: tests\signup-login.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText(/Logged in as\s+Endurance 1778658642121/i)
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Logged in as\s+Endurance 1778658642121/i)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
    - generic [ref=e73]:
      - button "Privacy and cookie settings" [ref=e74] [cursor=pointer]
      - generic [ref=e75]: "Managed by Google. Complies with IAB TCF. CMP ID: 300"
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
```

# Test source

```ts
  1  | import { expect, Page } from "@playwright/test";
  2  | import { BasePage } from "./base.page";
  3  | 
  4  | export type UserRegistration = {
  5  |   name: string;
  6  |   email: string;
  7  |   password: string;
  8  |   firstName: string;
  9  |   lastName: string;
  10 |   address: string;
  11 |   country: string;
  12 |   state: string;
  13 |   city: string;
  14 |   zipCode: string;
  15 |   mobileNumber: string;
  16 | };
  17 | 
  18 | export class AuthPage extends BasePage {
  19 |   constructor(page: Page) {
  20 |     super(page);
  21 |   }
  22 | 
  23 |   async open() {
  24 |     await this.goto("/login");
  25 |     await this.expectTitle(/Signup \/ Login/i);
  26 |   }
  27 | 
  28 |   async signup(user: UserRegistration) {
  29 |     await this.page.locator('[data-qa="signup-name"]').fill(user.name);
  30 |     await this.page.locator('[data-qa="signup-email"]').fill(user.email);
  31 |     await this.page.locator('[data-qa="signup-button"]').click();
  32 | 
  33 |     await expect(this.page.getByText(/Enter Account Information/i)).toBeVisible();
  34 |     await this.page.locator("#id_gender1").check();
  35 |     await this.page.locator('[data-qa="password"]').fill(user.password);
  36 |     await this.page.locator('[data-qa="days"]').selectOption("10");
  37 |     await this.page.locator('[data-qa="months"]').selectOption("5");
  38 |     await this.page.locator('[data-qa="years"]').selectOption("1995");
  39 |     await this.page.locator('[data-qa="first_name"]').fill(user.firstName);
  40 |     await this.page.locator('[data-qa="last_name"]').fill(user.lastName);
  41 |     await this.page.locator('[data-qa="address"]').fill(user.address);
  42 |     await this.page.locator('[data-qa="country"]').selectOption(user.country);
  43 |     await this.page.locator('[data-qa="state"]').fill(user.state);
  44 |     await this.page.locator('[data-qa="city"]').fill(user.city);
  45 |     await this.page.locator('[data-qa="zipcode"]').fill(user.zipCode);
  46 |     await this.page.locator('[data-qa="mobile_number"]').fill(user.mobileNumber);
  47 |     await this.page.locator('[data-qa="create-account"]').click();
  48 |   }
  49 | 
  50 |   async expectAccountCreated() {
  51 |     await expect(this.page.getByText(/Account Created!/i)).toBeVisible();
  52 |   }
  53 | 
  54 |   async continueAfterAccountCreation() {
  55 |     await this.page.locator('[data-qa="continue-button"]').click();
  56 |   }
  57 | 
  58 |   async expectLoggedInAs(name: string) {
> 59 |     await expect(this.page.getByText(new RegExp(`Logged in as\\s+${name}`, "i"))).toBeVisible();
     |                                                                                   ^ Error: expect(locator).toBeVisible() failed
  60 |   }
  61 | 
  62 |   async logout() {
  63 |     await this.clickNavLink(/Logout/i);
  64 |   }
  65 | 
  66 |   async login(email: string, password: string) {
  67 |     await this.page.locator('[data-qa="login-email"]').fill(email);
  68 |     await this.page.locator('[data-qa="login-password"]').fill(password);
  69 |     await this.page.locator('[data-qa="login-button"]').click();
  70 |   }
  71 | 
  72 |   async deleteAccount() {
  73 |     await this.clickNavLink(/Delete Account/i);
  74 |     await expect(this.page.getByText(/Account Deleted!/i)).toBeVisible();
  75 |   }
  76 | }
  77 | 
```