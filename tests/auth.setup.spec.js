const { test } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");

test("Login and save state", async ({ page }) => {
  const email = "test01@aaaa.com";
  const password = "ASdasd@!SDF";
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.login(email, password);
  await page.waitForTimeout(3000); 
  const ls = await page.evaluate(() => JSON.stringify(localStorage));
  console.log("LocalStorage after login:", ls);
  // Save the session state AFTER the UI confirms login
  await page.context().storageState({ path: "storageState.json" });
  // Wait for logged-in UI
  await page.getByTestId("navbar-user-avatar-img").waitFor();
  await page.getByTestId("homepage-title-text").waitFor();

});