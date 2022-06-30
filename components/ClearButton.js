export default function createClearButton(button, { handleClearList }) {
    button.addEventListener('click', () => {
        handleClearList();
    });

    return ({ listEmpty }) => {
        button.disabled = listEmpty;
    };
}
