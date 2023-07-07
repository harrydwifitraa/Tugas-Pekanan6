import Page from "./page";

class HomePage extends Page {
    
    get usernameField() {
        return $('#user-name');
    }

    get passwordField() {
        return $('#password');
    }

    get buttonLogin() {
        return $('#login-button');
    }

    get errorMessageNullPass() {
        return $('//*[contains(text(), "Epic sadface: Password is required")]');
    }

    get errorMessageInvalidPass() {
        return $('//*[contains(text(), "Epic sadface: Username and password do not match any user in this service")]');
    }

    //Login
    logIN = async (username, password) => {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.buttonLogin.click();
    }


}

export default new HomePage()