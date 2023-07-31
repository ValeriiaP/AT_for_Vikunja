import { createTitleForList } from '../../utils/titles.js';
import namespacesPage from '../../pageobjects/namespaces.page.js';
import toastMessage from '../../pageobjects/components/toast.message.js';
import { createUserWithSignInApi, signInWithCredsApi } from '../../businessFunctions/loginAPI.js';
import { signInWithCredsUi } from '../../businessFunctions/loginUI.js';
import { checkListItemInList, checkSuccessToastMessage } from '../../businessFunctions/validation.js'
import overviewPage from '../../pageobjects/overview.page.js';

describe('User on "Namespaces & Lists" section should be able to ', () => {
    it(' add additiinal list', async () => {
        //sigh in  user
        await createUserWithSignInApi();

        //create new list
        await overviewPage.addNewlist(createTitleForList());

        //open Namespace & list section
        await namespacesPage.openNamespaces();
        // create list
        let listTitle = createTitleForList();
        await namespacesPage.addNewList(listTitle);

        await checkSuccessToastMessage(toastMessage.messageAddList);
        await checkListItemInList(listTitle)

    })
})