import { expect, test } from "./fixtures";

test("Browse and discover products", async ({ app }) => {
  await app.homePage.open();
  await app.homePage.expectHeroContent();
  await app.homePage.clickNavLink(/Products/i);
  await app.productsPage.expectProductsPageLoaded();
  await app.productsPage.searchForProduct("Top");
  await app.productsPage.expectSearchResults("Top");
  await expect(app.productsPage.navLink(/Cart/i)).toBeVisible();
});
 