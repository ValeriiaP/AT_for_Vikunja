import {signInWithCredsApi} from '../../businessFunctions/loginAPI.js';
import { signInWithCredsUi } from '../../businessFunctions/loginUI.js';
import sideListSection from '../../pageobjects/components/sideListSection.js';
import favoritesSection from '../../pageobjects/components/favoritesSection.js';

describe('User should be able to',  () => {
    it('add the list to favorites using star button on overview page', async () => {
        //sign in
        // await signInWithCredsUi();
        await signInWithCredsApi({username: 'test_4', password: '123'});

        //selected the first list from the menu of lists and chose as favorite
        const locatorFavoriteList = await sideListSection.buttonFavoriteList.parentElement();
        const foo = $('.menu-list.can-be-hidden.dragging-disabled');
        await sideListSection.buttonFavoriteList.click();
        //check the favorite list in the special section is appeared

        await expect(favoritesSection.headerSection).toBeDisplayed();
        await expect(favoritesSection.starFavoriteButton).toBeDisplayed();
        await expect(locatorFavoriteList).toHaveText(await foo.getText());

    })

    it('add list to favorites on Namespaces & Lists page')
})