import Page from './page.js';

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get buttonNewListOnOverview() {
        return $('a.base-button.button.ml-2');
    }

    public get inputCreateListTitle() {
        return $('.input[name="listTitle"]')
    }

    public get buttonCreateList() {
        return $('button=Create');
    }

    public get inputAddANewTaskOnOverview() {
        return $('.add-task-textarea.input');
    }

    public get buttonAddTaskOnOverview() {
        return $('[aria-label="Add"]');
    }

    public get sideListMenu () {
        return $$('.list-menu-title');
    }
    public get menuTasksList () {
        return $('.tasktext');
    }

    public async addNewlistOnOverview(listTitle) {
        await this.buttonNewListOnOverview.click();
        await this.inputCreateListTitle.addValue(listTitle);
        await this.buttonCreateList.click();
    }

    public async addNewTaskOnOverview(taskTitle){
        await this.inputAddANewTaskOnOverview.addValue(taskTitle);
        await this.buttonAddTaskOnOverview.click();

    }
}

export default new HomePage();