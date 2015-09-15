import {isAuthorized} from './instagram-api';

export function RedirectWhenUnauthorized(route) {
    return function(classObject) {
        classObject.willTransitionTo = function(transition) {
            if (!isAuthorized()) {
                transition.redirect(route);
            }
        };
    };
}