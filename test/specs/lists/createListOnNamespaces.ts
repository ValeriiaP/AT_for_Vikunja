import { createTitleForList } from '../../utils/titles.js';
import NamespacesList from '../../pageobjects/namespaces.page.js';
import toastMessage from '../../pageobjects/toast.message.js';
import { signInWithExistingUser } from '../../businessFunctions/login.js';

describe('User on "Namespaces & Lists" section should be able to ', () => {
    it(' add additiinal list', async () => { 
        //sigh in existing user
        await signInWithExistingUser();
        //open Namespace & list section
        await NamespacesList.openNamespaces();
        // create list
        await NamespacesList.addNewList(createTitleForList());
        expect(await toastMessage.success).toBeDisplayedInViewport();
        expect(await toastMessage.success.getText()).toBe('Success');

    })
})