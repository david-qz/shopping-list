export default function createList(root, { handleBoughtItem }) {
    const ul = document.createElement('ul');
    root.append(ul);

    return ({ list }) => {
        ul.innerHTML = '';

        for (const lineItem of list) {
            ul.append(createListItem(lineItem, handleBoughtItem));
        }
    };
}

function createListItem(lineItem, handleBoughtItem) {
    // Create DOM
    const li = document.createElement('li');
    li.classList.toggle('bought', lineItem.bought);

    const checkMarkContainer = document.createElement('div');
    checkMarkContainer.classList.add('check-mark-container');

    const checkMarkSpan = document.createElement('span');
    checkMarkSpan.classList.add('check-mark');
    checkMarkSpan.textContent = '✓';

    checkMarkContainer.append(checkMarkSpan);
    const quantityString = lineItem.quantity ? `(${lineItem.quantity})` : '';

    const itemSpan = document.createElement('span');
    itemSpan.textContent = `${lineItem.item} ${quantityString}`;

    li.append(checkMarkContainer, itemSpan);

    // Add Event Listeners
    checkMarkContainer.addEventListener('click', () => {
        handleBoughtItem(lineItem);
    });

    itemSpan.addEventListener('click', () => {
        handleBoughtItem(lineItem);
    });

    return li;
}
