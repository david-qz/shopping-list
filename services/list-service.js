import { client } from './client.js';

const TABLE = 'list';

export async function getList() {
    const { data, error } = await client
        .from(TABLE)
        .select();

    if (error) {
        logError('getList()', error);
        return [];
    }

    return data;
}

export async function createLineItem(item) {
    const { data, error } = await client
        .from(TABLE)
        .insert(item)
        .single();

    if (error) {
        logError('createLineItem()', error);
        return null;
    }

    return data;
}

export async function updateLineItem(item) {
    const { data, error } = await client
        .from(TABLE)
        .update(item)
        .match({ id: item.id })
        .single();

    if (error) {
        logError('updateLineItem()', error);
        return null;
    }

    return data;
}

function logError(context, error) {
    // eslint-disable-next-line no-console
    console.log(`${context}: ${error.message}`);
}
