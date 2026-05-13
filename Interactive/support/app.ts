import { Page } from "@playwright/test";
import { AuthPage } from "../pages/auth.page";
import { CartPage } from "../pages/cart.page";
import { HomePage } from "../pages/home.page";
import { ProductDetailsPage } from "../pages/product-details.page";
import { ProductsPage } from "../pages/products.page";

export class App {
  readonly homePage: HomePage;
  readonly productsPage: ProductsPage;
  readonly productDetailsPage: ProductDetailsPage;
  readonly cartPage: CartPage;
  readonly authPage: AuthPage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.productsPage = new ProductsPage(page);
    this.productDetailsPage = new ProductDetailsPage(page);
    this.cartPage = new CartPage(page);
    this.authPage = new AuthPage(page);
  }
}
