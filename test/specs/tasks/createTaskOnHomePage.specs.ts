import LoginPage from '../../pageobjects/login.page.js'
import HomePage from '../../pageobjects/home.page.js'
import { newTitleForList, newTitleForTask } from '../../utils/titles.js';
import { setOptions } from 'expect-webdriverio'
import homePage from '../../pageobjects/home.page.js';

describe('User should be able add tasks from', () => {
    before(()=>{
        
    })
    it('Home Pages', async () => {
        const loginUser1 = 'test_3';
        const passwordUser1 = '123456';

        await LoginPage.open();
        await LoginPage.login(loginUser1, passwordUser1);
        const sideListMenuitem = await $('.base-button.list-menu-link');
        await sideListMenuitem.click();

        let currentTitleTask = newTitleForTask();
        await HomePage.addNewTaskOnOverview(currentTitleTask);

        // const menuTasksList = await $$('.tasktext')
        const menuTasksList = await $(`.tasktext*=${currentTitleTask}`)
        
        await menuTasksList.waitForExist();
        expect(await menuTasksList.getText()).toBe(currentTitleTask)
    })
});

describe('Add task without creating or choosing the list', () => {
    it('shouldn`t create a task and show an error', async () => {
        const loginUser1 = 'test_3';
        const passwordUser1 = '123456';

        await LoginPage.open();
        await LoginPage.login(loginUser1, passwordUser1);

        const errorMessage = $('p.is-danger')
        await HomePage.addNewTaskOnOverview(newTitleForTask);
        await expect(errorMessage).toBeDisplayedInViewport();
        await expect(errorMessage).toHaveText('Please specify a list or set a default list in the settings.');
        // expect(await errorMessage.getText()).toBe('Please specify a list or set a default list in the settings.')

    })
});