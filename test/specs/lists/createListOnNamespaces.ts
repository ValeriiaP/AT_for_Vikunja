import { createTitleForList } from '../../utils/titles.js';
import NamespacesList from '../../pageobjects/namespacesAndLists.page.js';
import toastMessage from '../../pageobjects/toast.message.js';
import { signInWithExistingUser } from '../../businessFunctions/login.js';

describe('User on "Namespaces & Lists" section should be able to ', () => {
    it(' add additiinal list', async () => { 
        //sigh in existing user
        await signInWithExistingUser();
        //open Namespace & list section
        await NamespacesList.openNamespacesMenu();
        // create list
        await NamespacesList.addNewListOnNamespaces(createTitleForList());
        expect(await toastMessage.success).toBeDisplayedInViewport();
        expect(await toastMessage.success.getText()).toBe('Success');

    })
})