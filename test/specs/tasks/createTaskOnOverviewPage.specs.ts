import OverviewPage from '../../pageobjects/overview.page.js'
import { createTitleForList, createTitleForTask } from '../../utils/titles.js';
import { setOptions } from 'expect-webdriverio'
import { signInWithExistingUser } from '../../businessFunctions/login.js';

describe('User should be able add tasks from', () => {
    beforeEach('shoul sign in to existing user', async () => {
        //sign in
        await signInWithExistingUser();
    })

    it('Overview Pages', async () => {
        //switch to the list using the side menu
        await OverviewPage.sideListMenu.click();
        //create new task
        let currentTitleTask = createTitleForTask();
        await OverviewPage.addNewTask(currentTitleTask);
        //checked new task added to the task list
        const menuTasksList = await $(`.tasktext*=${currentTitleTask}`)
        await menuTasksList.waitForExist();
        expect(await menuTasksList.getText()).toBe(currentTitleTask);
        //logout for next test
        await OverviewPage.logout();
    })

    it('shouldn`t create a task and show an error', async () => {
        const errorMessage = $('p.is-danger');
        //try to add task
        await OverviewPage.addNewTask(createTitleForTask());
        //check the error message has showed
        await expect(errorMessage).toBeDisplayedInViewport();
        await expect(errorMessage).toHaveText('Please specify a list or set a default list in the settings.');
        // expect(await errorMessage.getText()).toBe('Please specify a list or set a default list in the settings.')

    })
});