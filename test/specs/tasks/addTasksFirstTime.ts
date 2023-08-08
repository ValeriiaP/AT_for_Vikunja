import overviewPage from '../../pageobjects/overview.page.js';
import { createTitleForList, createTitleForTask } from '../../utils/titles.js';
import { apiCreateUser, createUserWithSignInApi, signInWithCredsApi } from '../../businessFunctions/loginAPI.js'
import { createUserWithSignInUi } from '../../businessFunctions/loginUI.js';
import sideListSection from '../../pageobjects/components/sideListSection.js';

describe('User should be able to ', () => {
    it('add list and tasks from the overview page for the first time after registration', async () => {
        await createUserWithSignInApi();

        const currentTitleList = createTitleForList();
        const currentTitleTask = createTitleForTask()
        await overviewPage.addNewlist(currentTitleList);
        await expect(sideListSection.listItem).toHaveText(currentTitleList);
        await overviewPage.addNewTask(currentTitleTask);
        await expect(overviewPage.currentTasksSectionItem).toHaveText(currentTitleTask);
    })
})
