
export async function protectPage(user) {
    if (!user) {
        location.replace(getAuthRedirect());
        return true;
    }
    return false;
}

export function getAuthRedirect() {
    const redirectUrl = encodeURIComponent(location.href);
    return `/auth/?redirectUrl=${redirectUrl.toString()}`;
}
