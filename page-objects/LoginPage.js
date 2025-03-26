class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('[value="Sign in")');
        this.errorMessage = page.locator('#flash_alert')
    }

    async navigate(){
        await this.page.goto('/login');
        }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await page.locator('form').evaluate(form => form.submit());
    }

    async getErrorMessage() {
        return this.errorMessage.textContent();
    }
}

module.exports = {LoginPage};