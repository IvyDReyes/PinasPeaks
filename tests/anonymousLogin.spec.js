const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { SignUpPage } = require("../pages/SignUpPage");
const { SearchAndView } = require("../pages/SearchAndView");
const { Username } = require("../pages/Username");

test.beforeEach(async ({ page }) => {
});

test('Claim your account', async ({page}) => {
    //Navigate to URL
    await page.goto("http://192.168.4.24:3000")
    //Go to Login page
    await page.getByTestId('navbar-login-button').click()
    //Click Login Anonymously
    await page.getByTestId('login-anon-button').click()
    await page.getByTestId('navbar-user-avatar-img').click()
    await page.getByTestId('navbar-profile-link').click()
    //Claim your account section
    await page.getByTestId('email').fill("prebadumamou-8248@yopmail.com")
    await page.getByTestId('password').fill("tester001@17")
    await page.getByTestId('claim-account-button').click()
});


test('Anonymous login, Search and View by mountain name', async ({page}) => {
    //Navigate to URL
    await page.goto("http://192.168.4.24:3000")
    //Go to Login page
    await page.getByTestId('navbar-login-button').click()
    //Click Login Anonymously
    await page.getByTestId('login-anon-button').click()
    //Search mountain
    await expect(page.getByTestId('search-input').isEditable()).toBeTruthy() //search mountain should be editable
    await page.getByTestId('search-input').fill("Cebu")
    await page.waitForSelector('#search-results div')
    //View mountain
    await page.locator('#search-results div[role="link"]').nth(23).click();
});

test("Create an account", async ({ page }) => {
  const randomEmail = `user_${Date.now()}@testmail.com`;
  const password = "tester001@11";
  const signUp = new SignUpPage(page);
  await signUp.goToSignUpPage();
  await signUp.signUp(randomEmail, password);
  await expect(page.getByTestId("signup-welcome-text")).toContainText(
    "Welcome"
  );
});


test("Invalid Email Login", async ({ page }) => {
  const invalidEmail = "testyopmail.com";
  const password = "tester001@11";
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.login(invalidEmail, password);
  
// Wait for browser’s native validation
  const invalidEmailField = page.locator('input#email[required]:invalid');
  await expect(invalidEmailField).toBeVisible();
});

test('Show Map and Hide Map, user is logged in Anonymously', async ({page}) => {
    await page.goto("http://192.168.4.24:3000")
    await page.getByTestId('navbar-login-button').click()
    //Click Login Anonymously
    await page.getByTestId('login-anon-button').click()
    //Click once to Show Map
    await page.getByTestId('toggle-map-button').click()
    await expect(page.getByTestId('map-of-ph-svg')).toBeVisible()
    //Click again to Hide Map
    await page.getByTestId('toggle-map-button').click()
    await expect(page.getByTestId('map-of-ph-svg')).toBeHidden()
});


test('Add a New Mountain, user is logged anonymously', async ({page}) => {
    await page.goto("http://192.168.4.24:3000")
    await page.getByTestId('navbar-login-button').click()
    //Click Login Anonymously
    await page.getByTestId('login-anon-button').click()
    await page.getByTestId('add-new-mountain-link').click()
    //Add a New Mountain form
    await page.locator('#name').fill("Test Mountain One")
    await page.locator('#masl').fill("1500")
    await page.locator('#type').selectOption({label: "mountain"})
    await page.locator('#mountain_range_id').selectOption({label: "Apo-Talomo Mountain Range"})
    await page.locator('#provinces').selectOption({label: "Rizal"})
    await page.locator('#notes').fill("This is a test mountain added by automated testing.")
    //Trail info form
    await page.locator('#trail_name').fill("Test Trail One")
    await page.locator('#trail_start').fill("Brgy. Test Start")
    await page.locator('#trail_end').fill("Brgy. Test End")

    const TrailClasses = [
                        "input[type='checkbox'][value='1']",
                         "input[type='checkbox'][value='5']"
                        ];
    for (const selector of TrailClasses) {
       await page.locator(selector).check();
       await expect(page.locator(selector)).toBeChecked();
    }

    await page.locator('#trail_climb_type').selectOption({label: "Minor"})
    await page.locator('#trail_level').selectOption({label: "Level 2"})
    await page.locator('#trail_type').selectOption({label: "Traverse"})
    await page.locator('#trail_description').fill("This is a test trail added by automated testing.")
    await page.locator('input[placeholder="Reference Name"][name="trail_reference_name_1"]').fill('Youtube')
    await page.locator('input[placeholder="https://example.com"][name="trail_reference_url_1"]').fill('https://youtube.com')
    await page.locator('input[placeholder="Reference Name"][name="trail_reference_name_2"]').fill('Facebook')
    await page.locator('input[placeholder="https://example.com"][name="trail_reference_url_2"]').fill('https://facebook.com')
    await page.locator('#trail_duration_days').fill("1")
    await page.locator('#trail_duration_hrs').fill("4")

    const TrailFeatures = [
        "input[type='checkbox'][name='feature_wheelchair']",
        "input[type='checkbox'][name='feature_bikes']",
        "input[type='checkbox'][name='feature_campfire']",
        "input[type='checkbox'][name='feature_campsite']",
        "input[type='checkbox'][name='feature_watersource']",
        "input[type='checkbox'][name='feature_toilets']",
        "input[type='checkbox'][name='feature_sarisari_store']",
        "input[type='checkbox'][name='feature_cell_signal']"
    ];

    for (const selector of TrailFeatures) {
        await page.locator(selector).check();
        await expect(page.locator(selector)).toBeChecked();
    }

    await page.getByTestId('submit-new-mountain-btn').click()
    await page.waitForURL('http://192.168.4.24:3000/mountains/new/success')
    expect(page.getByTestId('thankyou-text')).toContainText("Thank you for your contribution");
    expect(page.getByTestId('create-another-link')).toBeEnabled()

});
