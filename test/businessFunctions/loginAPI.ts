import { RegisterUserData, postLogin, postRegister } from "../integrations/apiVikunja.js";
import loginPage from "../pageobjects/login.page.js";
import registerPage from "../pageobjects/register.page.js";
import { getRandomPassword, getRandomStr, randomNum } from "../utils/random.js";

export async function apiCreateUser() {
    const username = `test_${getRandomStr()}${randomNum}`;

    const userData: RegisterUserData = {
        username: username,
        email: `${username}@test.com`,
        password: getRandomPassword()
    }

    await postRegister(userData);
    return userData;
}

export async function signInWithCredsApi({username, password}) {
    const req = await postLogin({username, password});
    const response = req.data;
    const token = response.token;

    await browser.url('/');
    await browser.execute(function (token) {
        localStorage.setItem("token", token)
    }, token)
    
    await browser.refresh();
}

export async function createUserWithSignInApi() {
    const user = await apiCreateUser();
    await signInWithCredsApi(user) 
}

