import { AllConstants } from "../_constants";

export function questions(state = {}, action) {
  switch (action.type) {
    case AllConstants.QUESTIONS_GETALL_REQUEST:
      return {
        loading: true,
      };
    case AllConstants.QUESTIONS_GETALL_SUCCESS:
      return {
        items: action.questions,
      };
    case AllConstants.QUESTIONS_GETALL_FAILURE:
      return {
        error: action.error,
      };
    case AllConstants.ANSWERS_SETALL_REQUEST:
      return {
        loading: true,
      };
    case AllConstants.ANSWERS_SETALL_SUCCESS:
      return {
        testResult: action.testResult,
      };
    case AllConstants.ANSWERS_SETALL_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
