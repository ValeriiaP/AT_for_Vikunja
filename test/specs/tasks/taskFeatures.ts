import { signInWithExistingUser } from '../../businessFunctions/login.js';
import overviewPage from '../../pageobjects/overview.page.js';
import taskPage from '../../pageobjects/task.page.js';
import { checkSuccessToastMessage } from '../../businessFunctions/validation.js'
import toastMessage from '../../pageobjects/components/toast.message.js';

describe('User should be able to ', () => {

    it('set a high priority level for the task ', async () => {
        await signInWithExistingUser();
        await overviewPage.currentTasksSectionItem.doubleClick();
        await taskPage.clickSetPriority();
        await taskPage.priorityDropdown.selectByAttribute('value', '3');

        await checkSuccessToastMessage(toastMessage.messageSaveTask);
        await overviewPage.openOverview();
        await expect(overviewPage.highPriorityLabel).toBeDisplayed();
    });
})
