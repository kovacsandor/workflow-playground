export function getApiUrl(route = '/'): string {
    return `${process.env.REACT_APP_SERVER_URL_ORIGIN}${route}`;
}
