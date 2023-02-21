import Page from "./page.js";
import { createUserName } from '../utils/titles.js';
import { getRandomPassword } from '../utils/random.js';
import loginPage from "./login.page.js";

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

        await loginPage.usernameInput.setValue(currentUser);
        await this.inputEmail.setValue(emailUser);
        await loginPage.passwordInput.setValue(getRandomPassword());
        await this.buttonCreateAccount.click();

    }
}
export default new Register();


