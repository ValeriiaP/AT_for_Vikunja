import LoginPage from '../../pageobjects/login.page.js'
import { newTitleForList } from '../../utils/titles.js';
import NamespacesList from '../../pageobjects/namespacesAndLists.page.js';
import toastMessage from '../../pageobjects/toast.message.js';

describe('User on "Namespaces & Lists" section should be able to ', () => {
    it(' add additiinal list', async () => { 

        const loginUser1 = 'test_3';
        const passwordUser1 = '123456';

        await LoginPage.open();
        await LoginPage.login(loginUser1, passwordUser1);

        await NamespacesList.openNamespacesMenu();
        await NamespacesList.addNewListOnNamespaces(newTitleForList);



        expect(await toastMessage.success.getText()).toBe('Success');

    })
})