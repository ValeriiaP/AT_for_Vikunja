import AddList from './components/addList.js';
import AddTask from './components/addTask.js';
import Page from './page.js';

class OverviewPage extends Page {
    
    public get addNewListButton() {
        return $('a.base-button.button.ml-2');
    }

    public get currentTasksSectionItem () {
        return $('.tasktext');
    }

    public async addNewlist(listTitle) {
        await this.addNewListButton.click();
        await AddList.addNewlist(listTitle)
    }

    public async addNewTask(taskTitle){
        await AddTask.addNewTask(taskTitle);
    }
}

export default new OverviewPage();