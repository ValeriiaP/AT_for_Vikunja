import { createTitleForList } from '../../utils/titles.js';
import namespacesPage from '../../pageobjects/namespaces.page.js';
import toastMessage from '../../pageobjects/components/toast.message.js';
import { signInWithCredsApi } from '../../businessFunctions/loginAPI.js';
import { signInWithCredsUi } from '../../businessFunctions/loginUI.js';
import { checkSuccessToastMessage } from '../../businessFunctions/validation.js'

describe('User on "Namespaces & Lists" section should be able to ', () => {
    it(' add additiinal list', async () => {
        //sigh in existing user
        // await signInWithCredsUi();
        await signInWithCredsApi({username: 'test_4', password: '123'});
        //open Namespace & list section
        await namespacesPage.openNamespaces();
        // create list
        await namespacesPage.addNewList(createTitleForList());

        await checkSuccessToastMessage(toastMessage.messageAddList);

    })
})