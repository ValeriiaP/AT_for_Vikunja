import Page from "./page.js";


class TaskPage extends Page {

    public get setPriorityButton () {
        return $('.fa-exclamation');
    }
    
    public async clickSetPriority() {
        await this.setPriorityButton.click();
    }

    public get priorityDropdown () {
        return $('.select select');
    }

}

export default new TaskPage();