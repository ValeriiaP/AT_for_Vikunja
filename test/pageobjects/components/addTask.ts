class AddTask {
    public get inputAddANewTask() {
        return $('.add-task-textarea.input');
    }

    public get buttonAddTask() {
        return $('[aria-label="Add"]');
    }
    
    public async addNewTask(taskTitle){
        await this.inputAddANewTask.addValue(taskTitle);
        await this.buttonAddTask.click();

    }
}
export default new AddTask();