import { createNewUserWithSignIn, signInWithExistingUser } from '../../businessFunctions/login.js';
import overviewPage from '../../pageobjects/overview.page.js';
import taskPage from '../../pageobjects/task.page.js';
import { checkSuccessToastMessage } from '../../businessFunctions/validation.js'
import toastMessage from '../../pageobjects/components/toast.message.js';
import { createTitleForList, createTitleForTask, lableTitle } from '../../utils/titles.js';
import sideMenu from '../../pageobjects/components/sideMenu.js';

describe('User should be able to ', () => {

    before('should sign in to new user, create new list and task', async function () {
        await createNewUserWithSignIn();
        const listTitle = createTitleForList();
        const taskTitle = createTitleForTask();
        await overviewPage.addNewlist(listTitle);
        await overviewPage.addNewTask(taskTitle);

    })

    it('set a high priority level for the task ', async () => {
        await overviewPage.currentTasksSectionItem.doubleClick();

        await taskPage.clickSetPriority();
        await taskPage.priorityDropdown.selectByAttribute('value', '3');

        await checkSuccessToastMessage(toastMessage.messageSaveTask);
        await overviewPage.openOverview();
        await expect(overviewPage.highPriorityLabel).toBeDisplayed();
    });

    it('add label for task', async () => {
        await overviewPage.currentTasksSectionItem.waitForClickable({timeout: 5000});
        await overviewPage.currentTasksSectionItem.doubleClick();

        await taskPage.clickAddLabels();
        const lable = lableTitle;
        await (await taskPage.lableTitleInput).setValue(lable);
        await browser.keys('Enter');
        await overviewPage.openOverview();
        await expect(overviewPage.lable).toHaveText(lable);
    })
})
