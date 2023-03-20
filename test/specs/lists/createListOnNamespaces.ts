import { createTitleForList } from '../../utils/titles.js';
import namespacesPage from '../../pageobjects/namespaces.page.js';
import toastMessage from '../../pageobjects/components/toast.message.js';
import { signInWithExistingUser } from '../../businessFunctions/login.js';
import { checkSuccessToastMessage } from '../../businessFunctions/validation.js'

describe('User on "Namespaces & Lists" section should be able to ', () => {
    it(' add additiinal list', async () => {
        //sigh in existing user
        await signInWithExistingUser();
        //open Namespace & list section
        await namespacesPage.openNamespaces();
        // create list
        await namespacesPage.addNewList(createTitleForList());

        await checkSuccessToastMessage(toastMessage.messageAddList);

    })
})