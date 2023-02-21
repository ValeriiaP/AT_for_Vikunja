import Page from "./page.js";
import addList from "./components/addList.js";
import SideMenu from "../pageobjects/components/sideMenu.js"

class NamespacesList extends Page {

    public get addNewListButton () {
        return $('.namespace .button');
    }

    public get listTile() {
        return $('a.list-button');
    }

    public async openNamespaces () {
        await SideMenu.namespaces.click()
    }

    public async addNewList(titleList){
        await this.addNewListButton.click();
        await addList.addNewlist(titleList);
    }
}

export default new NamespacesList();