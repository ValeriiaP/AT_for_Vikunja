
export async function checkItemInList(task) {
    const item = await $(`.tasktext*=${task}`);
    await item.waitForExist();
    // await expect(item).toHaveText(task);
    await expect(item).toHaveTextContaining(task);

}