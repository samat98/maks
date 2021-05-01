import { AllConstants } from "../_constants";

export function tests(state = {}, action) {
  switch (action.type) {
    case AllConstants.TESTS_GETALL_REQUEST:
      return {
        loading: true,
      };
    case AllConstants.TESTS_GETALL_SUCCESS:
      return {
        items: action.tests,
      };
    case AllConstants.TESTS_GETALL_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
