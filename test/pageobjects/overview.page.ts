import addList from './components/addList.js';
import addTask from './components/addTask.js';
import Page from './page.js';

class OverviewPage extends Page {
    
    public get addNewListButton() {
        return $('a.base-button.button.ml-2');
    }

    public get currentTasksSectionItem () {
        return $('.tasktext');
    }

    public get highPriorityLabel () {
        return $('span=High');
    }

    public async openOverview () {
        await super.open('/');
    }

    public async addNewlist(listTitle) {
        await this.addNewListButton.click();
        await addList.addNewlist(listTitle)
    }

    public async addNewTask(taskTitle){
        await addTask.addNewTask(taskTitle);
    }

}

export default new OverviewPage();