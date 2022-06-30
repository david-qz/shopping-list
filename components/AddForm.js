export default function createAddForm(form, { handleAddLineItem }) {
    const itemInput = form.querySelector('input[name="item"]');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        handleAddLineItem({
            item: formData.get('item'),
            quantity: formData.get('quantity') || null,
        });
        form.reset();
        itemInput.focus();
    });

    return () => {};
}
