import OverviewPage from '../../pageobjects/overview.page.js'
import { createTitleForList, createTitleForTask } from '../../utils/titles.js';
import { createNewUserWithSignIn } from '../../businessFunctions/login.js'

describe('User should be able to ', () => {
    it('add list and tasks from the overview page for the first time after registration', async () => {
        await createNewUserWithSignIn();
        const currentTitleList = createTitleForList();
        const currentTitleTask = createTitleForTask()
        await OverviewPage.addNewlist(currentTitleList);
        expect(await OverviewPage.sideListMenu).toHaveText(currentTitleList) 
        await OverviewPage.addNewTask(currentTitleTask);
        expect(await OverviewPage.currentTasksSectionItem).toHaveText(currentTitleTask)
    })
})


// add rundom names for list and task  - use some structure like - <AT_Test> + <rundom number/string> and for tasks  <AT_Test> +"task"+ <rundom number/string>

/// scenarios to automate:
// 1.adding lists
// - from the menu +
// 2.adding tasks:
// -inside a list +
// -from the main page+ 2+ lists => error +
// -added tasks in different lists showed in a "Current tasks" section
// 3. editing tasks
// - play with a different properties like priorities or dates etc and check result.
