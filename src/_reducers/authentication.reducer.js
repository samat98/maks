import { AllConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case AllConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case AllConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case AllConstants.LOGIN_FAILURE:
            return {};
        case AllConstants.LOGOUT:
            return {};
        default:
            return state
    }
}