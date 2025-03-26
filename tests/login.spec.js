const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page-objects/LoginPage');

test.describe('Login functionality', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login with valid credentials', async ({ page }) => {
    await loginPage.login('agileway', 'testwise');
    
    // Verify successful login (assuming it redirects to a dashboard)
    await expect(page).toHaveURL(/.*\/vacations/);
  });
  
  test('should display error with invalid credentials', async () => {
    await loginPage.login('invalid', 'credentials');
    
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid username or password');
  });
});