import overviewPage from '../../pageobjects/overview.page.js'
import { createTitleForTask } from '../../utils/titles.js';
import { setOptions } from 'expect-webdriverio'
import { signInWithExistingUser } from '../../businessFunctions/login.js';
import header from '../../pageobjects/components/header.js';
import sideListSection from '../../pageobjects/components/sideListSection.js';

describe('User should be able add tasks from', () => {
    beforeEach('should sign in to existing user', async () => {
        //sign in
        await signInWithExistingUser();
    });

    afterEach('should logout', async () => {
        //logout for next test
        await header.logout();
    });

    it('Overview Pages', async () => {
        //switch to the list using the side menu
        await sideListSection.listItem.click()
        // await OverviewPage.sideListMenu.click();
        //create new task
        let currentTitleTask = createTitleForTask();
        await overviewPage.addNewTask(currentTitleTask);
        //checked new task added to the task list
        const menuTasksList = await $(`.tasktext*=${currentTitleTask}`)
        await menuTasksList.waitForExist();
        expect(await menuTasksList.getText()).toBe(currentTitleTask);
    })

    it('shouldn`t create a task and show an error', async () => {
        const errorMessage = $('p.is-danger');
        //try to add task
        await overviewPage.addNewTask(createTitleForTask());
        //check the error message has showed
        await expect(errorMessage).toBeDisplayedInViewport();
        await expect(errorMessage).toHaveText('Please specify a list or set a default list in the settings.');
        // expect(await errorMessage.getText()).toBe('Please specify a list or set a default list in the settings.')

    })

    // it('can add tasks from different sections and see these tasks in the Current Tasks part', () => {

    // })
});