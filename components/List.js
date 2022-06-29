export default function createList(root) {
    return ({ list }) => {
        root.innerHTML = '';

        for (const item of list) {
            root.append(createListItem(item));
        }
    };
}

function createListItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = `${item.quantity} ${item.item}`;

    div.append(p);
    return div;
}
