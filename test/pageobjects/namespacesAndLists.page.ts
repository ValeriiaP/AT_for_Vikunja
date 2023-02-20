import Page from "./page.js";
import OverviewPage from "./overview.page.js";

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
        await OverviewPage.inputCreateListTitle.addValue(titleList);
        await OverviewPage.buttonCreateList.click();
    }
}

export default new NamespacesList();