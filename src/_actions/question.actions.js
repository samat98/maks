import { AllConstants } from "../_constants";
import { questionService } from "../_services";

export const questionActions = {
  getAllQuestions,
  setAllAnswers,
};

function getAllQuestions(name_url) {
  return (dispatch) => {
    dispatch(request());

    questionService.getAllQuestions(name_url).then(
      (questions) => dispatch(success(questions)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: AllConstants.QUESTIONS_GETALL_REQUEST };
  }
  function success(questions) {
    return { type: AllConstants.QUESTIONS_GETALL_SUCCESS, questions };
  }
  function failure(error) {
    return { type: AllConstants.QUESTIONS_GETALL_FAILURE, error };
  }
}

function setAllAnswers(name_url, answers) {
  return (dispatch) => {
    dispatch(request());

    questionService.setAllAnswers(name_url, answers).then(
      (testResult) => dispatch(success(testResult)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: AllConstants.ANSWERS_SETALL_REQUEST };
  }
  function success(testResult) {
    return { type: AllConstants.ANSWERS_SETALL_SUCCESS, testResult };
  }
  function failure(error) {
    return { type: AllConstants.ANSWERS_SETALL_FAILURE, error };
  }
}
