import { getUser, signOut } from './services/auth-service.js';
import { getList, createLineItem, updateLineItem } from './services/list-service.js';

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

async function handleAddLineItem(lineItem) {
    const newLineItem = await createLineItem(lineItem);
    if (!newLineItem) return;

    list.push(newLineItem);
    display();
}

async function handleBoughtItem(lineItem) {
    const index = list.findIndex(val => val.id === lineItem.id);
    if (index < 0) return;

    const newLineItem = await updateLineItem({
        id: lineItem.id,
        bought: !lineItem.bought,
    });
    if (!newLineItem) return;

    list[index] = newLineItem;

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
    document.querySelector('#list'),
    { handleBoughtItem }
);

function display() {
    User({ user });
    AddForm();
    List({ list });
}

handlePageLoad();
