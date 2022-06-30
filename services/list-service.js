import { client } from './client.js';
import { getUser } from './auth-service.js';

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

export async function clearList() {
    const { data, error } = await client
        .from(TABLE)
        .delete()
        .match({ user_id: getUser().id });

    if (error) {
        logError('clearList()', error);
        return [];
    }

    return data;
}

function logError(context, error) {
    // eslint-disable-next-line no-console
    console.error(`${context}: ${error.message}`);
}
