import {signInWithExistingUser} from '../../businessFunctions/login.js';
import sideListSection from '../../pageobjects/components/sideListSection.js';
import favoritesSection from '../../pageobjects/components/favoritesSection.js';

describe('User should be able to',  () => {
    it('add the list to favorites using star button on overview page', async () => {
        //sign in
        await signInWithExistingUser();
        //selected the first list from the menu of lists and chose as favorite
        await sideListSection.buttonFavoriteList.click();
        //check the favorite list in the special section is appeared
        expect(await favoritesSection.headerSection).toBeDisplayedInViewport();

    })

    it('add list to favorites on Namespaces & Lists page')
})