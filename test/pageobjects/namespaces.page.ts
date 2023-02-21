import Page from "./page.js";
import addList from "./components/addList.js";
import sideMenu from "../pageobjects/components/sideMenu.js"

class NamespacesPage extends Page {

    public get addNewListButton () {
        return $('.namespace .button');
    }

    public get listTile() {
        return $('a.list-button');
    }

    public async openNamespaces () {
        await sideMenu.namespaces.click()
    }

    public async addNewList(titleList){
        await this.addNewListButton.click();
        await addList.addNewlist(titleList);
    }
}

export default new NamespacesPage();