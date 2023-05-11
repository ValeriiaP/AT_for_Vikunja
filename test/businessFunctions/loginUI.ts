import { LoginUserData } from "../integrations/apiVikunja.js";
import loginPage from "../pageobjects/login.page.js";
import registerPage from "../pageobjects/register.page.js";

export async function signInWithCredsUi(data:LoginUserData = { username: 'test_3', password: '123456'}) {
    await loginPage.open();
    await loginPage.login(data.username, data.password)
}

export async function createUserWithSignInUi() {
    await browser.url('/register');
    await registerPage.createNewUserUi();
}