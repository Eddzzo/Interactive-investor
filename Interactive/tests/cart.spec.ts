import { test } from "./fixtures";

test("Add a product to cart and review cart", async ({ app }) => {
  await app.productsPage.open();
  await app.productsPage.openFirstProductDetails();

  await app.productDetailsPage.expectLoaded();
  const productName = await app.productDetailsPage.getProductName();
  await app.productDetailsPage.addToCart(2);
  await app.productDetailsPage.viewCartFromModal();

  await app.cartPage.expectProductInCart(productName);
});
