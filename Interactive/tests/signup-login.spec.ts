import { test } from "./fixtures";
import { createUser } from "../support/test-data";

test("Sign up, log in, and clean up account", async ({ app }) => {
  const user = createUser();

  await app.authPage.open();
  await app.authPage.signup(user);
  await app.authPage.expectAccountCreated();
  await app.authPage.continueAfterAccountCreation();
  await app.authPage.expectLoggedInAs(user.name);

  await app.authPage.logout();
  await app.authPage.open();
  await app.authPage.login(user.email, user.password);
  await app.authPage.expectLoggedInAs(user.name);
  await app.authPage.deleteAccount();
});
