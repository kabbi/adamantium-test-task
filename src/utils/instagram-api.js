import fetchJsonp from 'fetch-jsonp';

export const INSTAGRAM_CLIENT_ID = "1de9795e158c40468f6b7b6947b3726b";

export const INSTAGRAM_REDIRECT_URL = "http://localhost:8080/#";

export const INSTAGRAM_AUTH_URL = `https://instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${encodeURIComponent(INSTAGRAM_REDIRECT_URL)}&response_type=token`;

export const INSTAGRAM_API_URL = "https://api.instagram.com/v1/";

let token = null;

export function persistAuthToken(newToken) {
    token = newToken;
};

export function isAuthorized() {
    return !!token;
}

export function fetch(url) {
    var url = INSTAGRAM_API_URL + url + '?access_token=' + token;
    return fetchJsonp(url, {timeout: 10000}).then((result) => {
        // extract jsonp result
        return result.json();
    }).then((result) => {
        // check for api errors
        if (result.meta.code != 200) {
            throw result.meta;
        }
        // extract instagram data section for convenience
        return result.data
    });
};
