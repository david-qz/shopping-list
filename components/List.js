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

    const div = document.createElement('div');
    div.classList.add('check-mark-container');

    const span = document.createElement('span');
    span.classList.add('check-mark');
    span.textContent = '✓';

    div.append(span);
    const quantityString = lineItem.quantity ? `(${lineItem.quantity})` : '';
    li.append(div, `${lineItem.item} ${quantityString}`);

    // Add Event Listeners
    div.addEventListener('click', () => {
        handleBoughtItem(lineItem);
    });

    return li;
}
