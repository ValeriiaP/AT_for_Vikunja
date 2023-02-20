import loginPage from "./login.page.js";
import Page from "./page.js";
import homePage from "./home.page.js";

class NamespacesList extends Page {
    public get menuNamespaces () {
        return $('a[href="/namespaces"]');
    }

    public get buttonAddNewListOnNamespaces () {
        return $('.namespace .button');
    }

    public async openNamespacesMenu () {
        await this.menuNamespaces.click()
    }

    public async addNewListOnNamespaces(titleList){
        await this.buttonAddNewListOnNamespaces.click();
        await homePage.inputCreateListTitle.addValue(titleList);
        await homePage.buttonCreateList.click();
    }
}

export default new NamespacesList();