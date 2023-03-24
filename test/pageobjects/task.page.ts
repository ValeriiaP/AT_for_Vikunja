import Page from "./page.js";


class TaskPage extends Page {

    private get setPriorityButton () {
        return $('.fa-exclamation');
    }
    
    public async clickSetPriority() {
        await this.setPriorityButton.click();
    }

    public get priorityDropdown () {
        return $('.select select');
    }

    private get addLabelsButton () {
        return $('button=Add Labels');
    }

    public async clickAddLabels() {
        await this.addLabelsButton.click();
    }

    public get lableTitleInput () {
        return $('input[placeholder="Type to add a new label…"]');
    }
}

export default new TaskPage();