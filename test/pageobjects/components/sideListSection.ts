
class SideListSection {
    public get buttonFavoriteList () {
        return $('.menu.namespaces-lists .favorite');
    }

    public get listItem () {
        return $('.list-menu-title');
    }

    public get dropdownMenu () {
        return $('button.dropdown-trigger');
    }
} 

export default new SideListSection();