export default function createAddForm(form, { handleAddLineItem }) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        handleAddLineItem({
            item: formData.get('item'),
            quantity: formData.get('quantity'),
        });
        form.reset();
    });

    return () => {};
}
