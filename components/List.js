export default function createList(root) {
    return ({ list }) => {
        root.innerHTML = '';

        for (const lineItem of list) {
            root.append(createListItem(lineItem));
        }
    };
}

function createListItem(lineItem) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = `${lineItem.quantity} ${lineItem.item}`;

    div.append(p);
    return div;
}
