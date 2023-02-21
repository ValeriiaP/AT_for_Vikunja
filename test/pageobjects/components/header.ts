class Header {
    public get buttonUsername() {
        return $('span.username');
    }

    public get buttonLogout() {
        return $('span=Logout');

    }
    public async logout() {
        await this.buttonUsername.click();
        await this.buttonLogout.click();
    } 
}

export default new Header();