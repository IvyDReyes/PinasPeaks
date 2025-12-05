const { test, expect } = require("@playwright/test");
const { SearchAndView } = require("../pages/SearchAndView");
const { Username } = require("../pages/Username")
const { Map } = require("../pages/Map");

test.beforeEach(async ({ page }) => {
  await page.goto("http://192.168.4.24:3000")
});


test("Valid login, Search and View by mountain name", async ({ page }) => {
  const searchAndView = new SearchAndView(page);
  await searchAndView.search();
  await searchAndView.viewResult();
  await expect(page.getByTestId("search-input")).toBeEditable();
  await expect(page.getByTestId("search-button")).toBeEnabled();
});



test('Create and update the username', async ({page}) => {
  const update = new Username(page);
  await update.updateUsername();
  await update.createUsername();
});


test('Show Map and Hide Map, user is logged in', async ({page}) => {
    const map = new Map(page);
    await map.showMap();
    await expect(page.getByTestId('map-of-ph-svg')).toBeVisible()
    await map.hideMap();
    await expect(page.getByTestId('map-of-ph-svg')).toBeHidden()
});



// test('Add a New Mountain, user is logged in', async ({page}) => {
//     await page.goto("http://192.168.4.24:3000")
//     await page.getByTestId('navbar-login-button').click()
//     await page.getByTestId('email').fill("yvidelosreyes@gmail.com")
//     await page.getByTestId('password').fill("tester001@11")
//     await page.getByTestId('login-button').click()
//     await page.getByTestId('add-new-mountain-link').click()
//     //Add a New Mountain form
//     await page.locator('#name').fill("Test Mountain One")
//     await page.locator('#masl').fill("1500")
//     await page.locator('#type').selectOption({label: "mountain"})
//     await page.locator('#mountain_range_id').selectOption({label: "Apo-Talomo Mountain Range"})
//     await page.locator('#provinces').selectOption({label: "Rizal"})
//     await page.locator('#notes').fill("This is a test mountain added by automated testing.")
//     //Trail info form
//     await page.locator('#trail_name').fill("Test Trail One")
//     await page.locator('#trail_start').fill("Brgy. Test Start")
//     await page.locator('#trail_end').fill("Brgy. Test End")

//     const TrailClasses = [
//                         "input[type='checkbox'][value='1']",
//                          "input[type='checkbox'][value='5']"
//                         ];
//     for (const selector of TrailClasses) {
//        await page.locator(selector).check();
//        await expect(page.locator(selector)).toBeChecked();
//     }

//     await page.locator('#trail_climb_type').selectOption({label: "Minor"})
//     await page.locator('#trail_level').selectOption({label: "Level 2"})
//     await page.locator('#trail_type').selectOption({label: "Traverse"})
//     await page.locator('#trail_description').fill("This is a test trail added by automated testing.")
//     await page.locator('input[placeholder="Reference Name"][name="trail_reference_name_1"]').fill('Youtube')
//     await page.locator('input[placeholder="https://example.com"][name="trail_reference_url_1"]').fill('https://youtube.com')
//     await page.locator('input[placeholder="Reference Name"][name="trail_reference_name_2"]').fill('Facebook')
//     await page.locator('input[placeholder="https://example.com"][name="trail_reference_url_2"]').fill('https://facebook.com')
//     await page.locator('#trail_duration_days').fill("1")
//     await page.locator('#trail_duration_hrs').fill("4")

//     const TrailFeatures = [
//         "input[type='checkbox'][name='feature_wheelchair']",
//         "input[type='checkbox'][name='feature_bikes']",
//         "input[type='checkbox'][name='feature_campfire']",
//         "input[type='checkbox'][name='feature_campsite']",
//         "input[type='checkbox'][name='feature_watersource']",
//         "input[type='checkbox'][name='feature_toilets']",
//         "input[type='checkbox'][name='feature_sarisari_store']",
//         "input[type='checkbox'][name='feature_cell_signal']"
//     ];

//     for (const selector of TrailFeatures) {
//         await page.locator(selector).check();
//         await expect(page.locator(selector)).toBeChecked();
//     }

//     await page.getByTestId('submit-new-mountain-btn').click()
//     await page.waitForURL('http://192.168.4.24:3000/mountains/new/success')
//     expect(page.getByTestId('thankyou-text')).toContainText("Thank you for your contribution");
//     expect(page.getByTestId('create-another-link')).toBeEnabled()

// });


// test('Create Another? link', async ({page}) => {
//     await page.goto("http://192.168.4.24:3000/mountains/new/success")

//     await page.getByTestId('create-another-link').click()
//      //Add a New Mountain form
//     await page.locator('#name').fill("Test Mountain One")
//     await page.locator('#masl').fill("1500")
//     await page.locator('#type').selectOption({label: "mountain"})
//     await page.locator('#mountain_range_id').selectOption({label: "Apo-Talomo Mountain Range"})
//     await page.locator('#provinces').selectOption({label: "Rizal"})
//     await page.locator('#notes').fill("This is a test mountain added by automated testing.")
//     //Trail info form
//     await page.locator('#trail_name').fill("Test Trail One")
//     await page.locator('#trail_start').fill("Brgy. Test Start")
//     await page.locator('#trail_end').fill("Brgy. Test End")

//     const TrailClasses = [
//                         "input[type='checkbox'][value='1']",
//                          "input[type='checkbox'][value='5']"
//                         ];
//     for (const selector of TrailClasses) {
//        await page.locator(selector).check();
//        await expect(page.locator(selector)).toBeChecked();
//     }

//     await page.locator('#trail_climb_type').selectOption({label: "Minor"})
//     await page.locator('#trail_level').selectOption({label: "Level 2"})
//     await page.locator('#trail_type').selectOption({label: "Traverse"})
//     await page.locator('#trail_description').fill("This is a test trail added by automated testing.")
//     await page.locator('input[placeholder="Reference Name"][name="trail_reference_name_1"]').fill('Youtube')
//     await page.locator('input[placeholder="https://example.com"][name="trail_reference_url_1"]').fill('https://youtube.com')
//     await page.locator('input[placeholder="Reference Name"][name="trail_reference_name_2"]').fill('Facebook')
//     await page.locator('input[placeholder="https://example.com"][name="trail_reference_url_2"]').fill('https://facebook.com')
//     await page.locator('#trail_duration_days').fill("1")
//     await page.locator('#trail_duration_hrs').fill("4")

//     const TrailFeatures = [
//         "input[type='checkbox'][name='feature_wheelchair']",
//         "input[type='checkbox'][name='feature_bikes']",
//         "input[type='checkbox'][name='feature_campfire']",
//         "input[type='checkbox'][name='feature_campsite']",
//         "input[type='checkbox'][name='feature_watersource']",
//         "input[type='checkbox'][name='feature_toilets']",
//         "input[type='checkbox'][name='feature_sarisari_store']",
//         "input[type='checkbox'][name='feature_cell_signal']"
//     ];

//     for (const selector of TrailFeatures) {
//         await page.locator(selector).check();
//         await expect(page.locator(selector)).toBeChecked();
//     }

//     await page.getByTestId('submit-new-mountain-btn').click()
//     await page.waitForURL('http://192.168.4.24:3000/mountains/new/success')
//     expect(page.getByTestId('thankyou-text')).toContainText("Thank you for your contribution");
//     expect(page.getByTestId('create-another-link')).toBeEnabled()

// });