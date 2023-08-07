import Page from "./page.js";


class TaskPage extends Page {

    private get setPriorityButton() {
        return $('button=Set Priority');
    }

    public async clickSetPriority() {
            await this.setPriorityButton.click();
    }

    public get priorityDropdown() {
        return $('.select select');
    }

    private get addLabelsButton() {
        return $('button=Add Labels')
    }

    public async clickAddLabels() {
        await this.addLabelsButton.click();
    }

    public get lableTitleInput() {
        return $('input[placeholder="Type to add a new label…"]');
    }

    private get setStartDateButton() {
        return $('button=Set Start Date');
    }

    public async clickSetStartDateDatepicker() {
        await this.setStartDateButton.click();
    }
    private get setColorButton() {
        return $('button=Set Color');
    }

    public async clickSetColor() {
        await this.setColorButton.click();
    }

    private get setStartDateInput() {
        return $('.datepicker').$('button*=start date');
    }

    public async clickSetDateInput() {
        await this.setStartDateInput.click();
    }

    private get nextMondayDatepickerButton() {
        return $('span*=Next Monday');
    }

    public async selectNextMondatDatepicker() {
        await this.nextMondayDatepickerButton.click();
    }

    public get confirmDatepickerButton() {
        return $('.datepicker__close-button');
    }

    public async clickConfirmDate() {
        await this.confirmDatepickerButton.click();
    }

    public get startDateTitlePlate() {
        return $('.detail-title=Start Date');
    }

    public get enteredDateStartDate() {
        return $('.input .flatpickr-input');
    }

}

export default new TaskPage();