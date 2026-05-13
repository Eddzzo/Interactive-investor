import { test } from "./fixtures";

test("Evaluate product details", async ({ app }) => {
  await app.productsPage.open();
  await app.productsPage.expectProductsPageLoaded();
  await app.productsPage.openFirstProductDetails();

  await app.productDetailsPage.expectLoaded();
  await app.productDetailsPage.expectEssentialDetails();
});
