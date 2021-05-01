import { AllConstants } from '../_constants';

export function registration(state = {}, action) {
    switch (action.type) {
        case AllConstants.REGISTER_REQUEST:
            return { registering: true };
        case AllConstants.REGISTER_SUCCESS:
            return {};
        case AllConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}