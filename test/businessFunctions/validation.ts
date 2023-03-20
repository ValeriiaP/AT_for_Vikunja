import toastMessage from "../pageobjects/components/toast.message.js";

export async function checkTaskItemInList(task) {
    const item = await $(`.tasktext*=${task}`);
    await item.waitForExist();
    // await expect(item).toHaveText(task);
    await expect(item).toHaveTextContaining(task);

}

export async function checkListItemInList(list) {
    const item = await $(`.list-menu-title*=${list}`);
    await item.waitForExist();
    await expect(item).toHaveTextContaining(list);

}

export async function checkSuccessToastMessage(text) {
    await expect(toastMessage.successTitle).toBeDisplayed();
    await expect(toastMessage.successTitle).toHaveText('Success');
    await expect(toastMessage.successContent).toHaveText(text);
}