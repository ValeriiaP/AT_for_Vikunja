class AddList {
    public get inputCreateListTitle() {
        return $('.input[name="listTitle"]')
    }
    public get buttonCreateList() {
        return $('button=Create');
    }

    public async addNewlist(listTitle) {
        await this.inputCreateListTitle.addValue(listTitle);
        await this.buttonCreateList.click();
    }

}

export default new AddList();