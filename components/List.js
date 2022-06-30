export default function createList(root, { handleBoughtItem }) {
    return ({ list }) => {
        root.innerHTML = '';

        for (const lineItem of list) {
            root.append(createListItem(lineItem, handleBoughtItem));
        }
    };
}

function createListItem(lineItem, handleBoughtItem) {
    const div = document.createElement('div');

    const p = document.createElement('p');
    p.textContent = `${lineItem.quantity} ${lineItem.item}`;
    p.classList.toggle('bought', lineItem.bought);

    p.addEventListener('click', () => {
        handleBoughtItem(lineItem);
    });

    div.append(p);
    return div;
}
