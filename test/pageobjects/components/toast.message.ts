class ToastMessages {
    public get success () {
        return $('div.notification-title');
    }
}

export default new ToastMessages()