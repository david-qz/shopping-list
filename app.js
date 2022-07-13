import { getUser, signOut } from './services/auth-service.js';
import { getList } from './services/list-service.js';

import { protectPage } from './utils.js';
import createUser from './components/User.js';

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

// Components
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

function display() {
    User({ user });

}

handlePageLoad();
