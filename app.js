import { getUser, signOut } from './services/auth-service.js';
import { getList, createLineItem } from './services/list-service.js';

import { protectPage } from './utils.js';

import createUser from './components/User.js';
import createAddForm from './components/AddForm.js';
import createList from './components/List.js';

// State
let user = null;
let list = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    list = await getList();

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAddLineItem(item) {
    const newLineItem = await createLineItem(item);
    if (!newLineItem) return;

    list.push(newLineItem);
    display();
}

// Components
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const AddForm = createAddForm(
    document.querySelector('#add-form'),
    { handleAddLineItem }
);

const List = createList(
    document.querySelector('#list')
);

function display() {
    User({ user });
    AddForm();
    List({ list });
}

handlePageLoad();
