import { postLogin, postRegister } from "../integrations/apiVikunja.js";
import loginPage from "../pageobjects/login.page.js";
import registerPage from "../pageobjects/register.page.js";
import { getRandomPassword, getRandomStr, randomNum } from "../utils/random.js";

export async function signInWithExistingUser(username?, password?) {
    const loginUser1 = 'test_3';
    const passwordUser1 = '123456';

    await loginPage.open();
    await loginPage.login(loginUser1, passwordUser1)
}

export async function createUIUserWithSignIn() {
    await browser.url('/register');
    await registerPage.createNewUser();
}

export async function apiCreateUser() {
    const username = `test_${getRandomStr()}${randomNum}`;
    const email = `${username}@test.com`
    const password = getRandomPassword();

    await postRegister({username, email, password});
    return {username, password, email};
}

export async function apiLogin({username, password}) {
    const req = await postLogin({username, password});
    const response = req.data;
    const token = response.token;

    await browser.url('/');
    // await browser.setLocalStorage('token', token);
    await browser.execute(function (token) {
        localStorage.setItem("token", token)
    }, token)
    
    await browser.refresh();
}

