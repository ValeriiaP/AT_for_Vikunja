import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get usernameInput () {
        return $('#username');
    }

    public get passwordInput () {
        return $('#password');
    }

    public get submitButton () {
        return $('#loginform .is-primary');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }
}

export default new LoginPage();
