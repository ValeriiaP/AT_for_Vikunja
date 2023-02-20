import Page from "./page.js";

class Register extends Page {

    public get buttonCreateAccount () {
        return $('#register-submit')
    }
    public get inputEmail () {
        return $('#email')
    }
    
}
export default new Register();


