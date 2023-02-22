import overviewPage from '../../pageobjects/overview.page.js'
import { createTitleForTask } from '../../utils/titles.js';
import { setOptions } from 'expect-webdriverio'
import { signInWithExistingUser } from '../../businessFunctions/login.js';
import header from '../../pageobjects/components/header.js';
import sideListSection from '../../pageobjects/components/sideListSection.js';
import addTask from '../../pageobjects/components/addTask.js';
import { checkItemInList } from '../../businessFunctions/validation.js';
import namespacesPage from '../../pageobjects/namespaces.page.js';

describe('User should be able add tasks from', () => {
    beforeEach('should sign in to existing user', async () => {
        //sign in
        await signInWithExistingUser();
    });

    afterEach('should logout', async () => {
        //logout for next test
        await header.logout();
    });

    it('shouldn`t create a task and show an error', async () => {
        const errorMessage = $('p.is-danger');
        //try to add task
        await overviewPage.addNewTask(createTitleForTask());
        //check the error message has showed
        await expect(errorMessage).toBeDisplayedInViewport();
        await expect(errorMessage).toHaveText('Please specify a list or set a default list in the settings.');

    });

    it('Overview Pages and find these tasks in the Current Tasks part', async () => {
        //switch to the list using the side menu
        await sideListSection.listItem.click();
        //create new task
        let currentTitleTask = createTitleForTask();
        await overviewPage.addNewTask(currentTitleTask);
        await overviewPage.openOverview();
        //checked new task added to the task lists
        await checkItemInList(currentTitleTask);
    });

    it('can add tasks from Namespaces page and find these tasks in the Current Tasks section', async () => {
        //open Namespaces page
        await namespacesPage.openNamespaces();
        //select a list from the list of lists
        (await namespacesPage.listTile).click();
        const task = createTitleForTask();
        //add new task
        await addTask.addNewTask(task);
        //open main page
        await overviewPage.openOverview();
        //checked new task added to the task lists
        await checkItemInList(task);
    });
});