import overviewPage from '../../pageobjects/overview.page.js';
import { createTitleForList, createTitleForTask } from '../../utils/titles.js';
import { apiCreateUser, apiLogin, createUIUserWithSignIn } from '../../businessFunctions/login.js'
import sideListSection from '../../pageobjects/components/sideListSection.js';

describe('User should be able to ', () => {
    it('add list and tasks from the overview page for the first time after registration', async () => {
        const user = await apiCreateUser();
        await apiLogin(user) 
        const currentTitleList = createTitleForList();
        const currentTitleTask = createTitleForTask()
        await overviewPage.addNewlist(currentTitleList);
        await expect(sideListSection.listItem).toHaveText(currentTitleList);
        await overviewPage.addNewTask(currentTitleTask);
        await expect(overviewPage.currentTasksSectionItem).toHaveText(currentTitleTask);
    })
})


// add rundom names for list and task  - use some structure like - <AT_Test> + <rundom number/string> and for tasks  <AT_Test> +"task"+ <rundom number/string>

/// scenarios to automate:
// 1.adding lists
// - from the menu +
// 2.adding tasks:
// -inside a list +
// -from the main page+ 2+ lists => error +
// -added tasks in different lists showed in a "Current tasks" section +
// 3. editing tasks
// - play with a different properties like priorities or dates etc and check result.
