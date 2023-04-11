class SideMenu {
    public get namespaces () {
        return $('a[href="/namespaces"]');
    }

    public get overview() {
        return $$('a[href="/"]')[2];
    }

}

export default new SideMenu();