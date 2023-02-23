
class FavoritesSection {
    public get headerSection() {
        // return $('button .menu-label=Favorites');
        return $('.namespace-title').$('span=Favorites');
    }

    public get starFavoriteButton() {
        return $('li.list-menu button.is-favorite');
    }

//     public async isItemInFavorite() {
//         const parent = await this.headerSection.parentElement();
//         const selectedItem = await parent.$('li.list-menu button.is-favorite');
//     }
}

export default new FavoritesSection();