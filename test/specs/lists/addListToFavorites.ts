import {signInWithExistingUser} from '../../businessFunctions/login.js';
import SideListSection from '../../pageobjects/components/sideListSection.js';
import FavoritesSection from '../../pageobjects/components/favoritesSection.js';
import overviewPage from '../../pageobjects/overview.page.js';

describe('User should be able to',  () => {
    it('add the list to favorites using star button on overview page', async () => {
        //sign in
        await signInWithExistingUser();
        //selected the first list from the menu of lists and chose as favorite
        await SideListSection.buttonFavoriteList.click();
        //check the favorite list in the special section is appeared
        expect(await FavoritesSection.headerSection).toBeDisplayedInViewport();

    })

    it('add list to favorites on Namespaces & Lists page')
})