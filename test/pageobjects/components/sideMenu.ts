class SideMenu {
    public get namespaces () {
        return $('a[href="/namespaces"]');
    }

}

export default new SideMenu();