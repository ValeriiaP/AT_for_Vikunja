import Page from "./page.js";
import { createUserName } from '../utils/titles.js';
import { getRandomPassword } from '../utils/random.js';
import LoginPage from "./login.page.js";

class Register extends Page {

    public get buttonCreateAccount() {
        return $('#register-submit')
    }
    public get inputEmail() {
        return $('#email')
    }

    public async createNewUser() {
        const currentUser = createUserName();
        const emailUser = `${currentUser}@test.com`;

        await LoginPage.usernameInput.setValue(currentUser);
        await this.inputEmail.setValue(emailUser);
        await LoginPage.passwordInput.setValue(getRandomPassword());
        await this.buttonCreateAccount.click();

    }
}
export default new Register();


