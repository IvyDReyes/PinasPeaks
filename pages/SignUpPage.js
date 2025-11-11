exports.SignUpPage = class SignUpPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByTestId("email");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
  }

  async goToSignUpPage() {
    await this.page.goto("http://192.168.4.24:3000/signup");
  }

  async signUp(randomEmail, password) {
    await this.emailInput.fill(randomEmail);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
};
