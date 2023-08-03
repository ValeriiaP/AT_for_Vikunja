class ToastMessages {
    get successTitle () {
        return $('.notification-title');
    }

    public get successContent() {
        return $('div.notification-content');
    }

    public messageAddList = 'The list was successfully created.';
    public messageSaveTask = 'The task was saved successfully.';
}

export default new ToastMessages()