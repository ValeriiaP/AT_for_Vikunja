import addList from './components/addList.js';
import addTask from './components/addTask.js';
import sideMenu from './components/sideMenu.js';
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

    public get lable() {
        return $('.tag span');
    }


    public async openOverview () {
        await sideMenu.overview.click();
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