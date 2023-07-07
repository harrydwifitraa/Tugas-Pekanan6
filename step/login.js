import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageObject/HomePage";
import DashboardPage from "../pageObject/DashboardPage";

Given('I am on the login page', async () => {
    await HomePage.open();
    await expect(browser).toHaveTitle('Swag Labs');
});

When('I input username as {string} and password as {string}', async (username,password) => {
    await HomePage.usernameField.setValue(username);
    await HomePage.passwordField.setValue(password);
});

When('I click on button login', async () => {
    await HomePage.buttonLogin.click();
});

Then('appear error message password null', async () => {
    await expect(HomePage.errorMessageNullPass).toBeExisting()
});

Then('appear error message password invalid', async () => {
    await expect(HomePage.errorMessageInvalidPass).toBeExisting()
});

Then('I navigate to dashboard page', async () => {
    await expect(DashboardPage.cartIcon).toExist();
    await expect(DashboardPage.aTitle).toHaveText('Products');
})

Given('I am on dashboard page', async () => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
})
