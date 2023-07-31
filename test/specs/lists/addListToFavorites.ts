import sideListSection from '../../pageobjects/components/sideListSection.js';
import favoritesSection from '../../pageobjects/components/favoritesSection.js';
import overviewPage from '../../pageobjects/overview.page.js';
import { createTitleForList } from '../../utils/titles.js';
import { createUserWithSignInApi } from '../../businessFunctions/loginAPI.js';


describe('User should be able to', () => {
    it('add the list to favorites using star button on overview page', async () => {
        //sign in
        await createUserWithSignInApi();

        // creare list of tlists
        await overviewPage.addNewlist(createTitleForList());
        await sideListSection.addNewList(createTitleForList());
        await sideListSection.addNewList(createTitleForList());

        //selected the first list from the menu of lists and chose as favorite
        const locatorFavoriteList = await sideListSection.buttonFavoriteList.parentElement();
        const expectedFavoriteList = await $('.menu-list.can-be-hidden.dragging-disabled');
        await sideListSection.buttonFavoriteList.click();
        //check the favorite list in the special section is appeared

        await expect(favoritesSection.headerSection).toBeDisplayed();
        await expect(favoritesSection.starFavoriteButton).toBeDisplayed();
        // await expect(locatorFavoriteList).toHaveText(await foo.getText());
        await expect($('.button')).toHaveText(await expectedFavoriteList.getText());

    })
})