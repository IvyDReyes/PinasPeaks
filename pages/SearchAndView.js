exports.SearchAndView = class SearchAndView {
  constructor(page) {
    this.page = page;
    this.homePageTitle = page.getByTestId("homepage-title-text")
    this.searchInputBox = page.getByTestId("search-input")
    this.searchButton = page.getByTestId("search-button")
    

    
  }

async goToHomePage() {
    await this.page.goto("http://192.168.4.24:3000");
  }
  
  async search() {
    await this.searchInputBox.fill("Pulag")
    await this.searchButton.click()
  }

  async viewResult() {
    const firstResult = this.page.locator('#search-results div[role="link"]').nth(0);
    await firstResult.click();
  }

}
