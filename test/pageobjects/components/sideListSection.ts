import addList from "./addList.js";

class SideListSection {
    public get buttonFavoriteList() {
        return $('.menu.namespaces-lists .favorite');
    }

    public get listItem() {
        return $('.list-menu-title');
    }

    public get dropdownMenu() {
        return $('button.dropdown-trigger');
    }

    public get newList() {
        return $$('.dropdown-item')[2];
    }

    public get expectedList() {
        return $('.menu-list.can-be-hidden.dragging-disabled');
    }

    public async addNewList(listTitle) {
        await this.dropdownMenu.click();
        await this.newList.click();
        await addList.addNewlist(listTitle);
    }
}

export default new SideListSection();