exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.navbarButton = page.getByTestId("navbar-login-button");
    this.emailInput = page.getByTestId("email");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
    this.signUpButton = page.getByTestId("signup-button");
  }
  
  async goToLoginPage() {
    await this.page.goto("http://192.168.4.24:3000");
  }

  async login(email, password) {
    await this.navbarButton.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
};
