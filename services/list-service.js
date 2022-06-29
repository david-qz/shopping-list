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

function logError(context, error) {
    // eslint-disable-next-line no-console
    console.log(`${context}: ${error.message}`);
}
