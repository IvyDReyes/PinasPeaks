exports.Username = class Username {
  constructor(page) {
    this.page = page;
    this.avatar = page.getByTestId("navbar-user-avatar-img");
    this.profileButton = page.getByTestId("navbar-profile-button");
    this.usernameTextBox = page.getByTestId("username");
    this.createUpdateUsernameButton = page.getByTestId(
      "submit-username-button"
    );
    this.successMessage = page.getByTestId("success-update-username-message");
  }

  // async createUsername() {
  //   await this.avatar.waitFor();
  //   await this.avatar.click();
  //   await this.profileButton.click();
  //   await this.usernameTextBox.click();
  //   await this.createUpdateUsernameButton.click();
  // }

//  async goToHomepage() {
//     await this.page.goto("http://192.168.4.24:3000");
//  }

  async updateUsername() {
    await this.avatar.click();
    await this.profileButton.click();
    await this.usernameTextBox.click();
    await this.createUpdateUsernameButton.click();
  }
};
