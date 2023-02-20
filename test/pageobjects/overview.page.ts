import Page from './page.js';

class OverviewPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get buttonNewList() {
        return $('a.base-button.button.ml-2');
    }

    public get inputCreateListTitle() {
        return $('.input[name="listTitle"]')
    }

    public get buttonCreateList() {
        return $('button=Create');
    }

    public get inputAddANewTask() {
        return $('.add-task-textarea.input');
    }

    public get buttonAddTask() {
        return $('[aria-label="Add"]');
    }

    public get sideListMenu () {
        return $('.list-menu-title');
    }
    public get menuTasksList () {
        return $('.tasktext');
    }

    public get buttonUsername() {
        return $('span.username');
    }

    public async logout() {
        const buttonLogout = await $('span=Logout');
        await this.buttonUsername.click();
        await buttonLogout.click();
    } 

    public async addNewlist(listTitle) {
        await this.buttonNewList.click();
        await this.inputCreateListTitle.addValue(listTitle);
        await this.buttonCreateList.click();
    }

    public async addNewTask(taskTitle){
        await this.inputAddANewTask.addValue(taskTitle);
        await this.buttonAddTask.click();

    }
}

export default new OverviewPage();