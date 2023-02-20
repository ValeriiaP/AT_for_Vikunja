import loginPage from "../pageobjects/login.page.js";
import { newUserName } from "../utils/titles.js";
import registerPage from "../pageobjects/register.page.js";
import { getRandomPassword } from "../utils/random.js";



export async function signInWithExistingUser() {
    const loginUser1 = 'test_3';
    const passwordUser1 = '123456';

    await loginPage.open();
    await loginPage.login(loginUser1, passwordUser1)
}

export async function createNewUserWithSignIn() {
    await browser.url('/register');
    const currentUser = newUserName();
    const emailUser = `${currentUser}@test.com`;
    
    await loginPage.inputUsername.setValue(currentUser);
    await registerPage.inputEmail.setValue(emailUser);
    await loginPage.inputPassword.setValue(getRandomPassword());
    await registerPage.buttonCreateAccount.click()

}