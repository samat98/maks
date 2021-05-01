import { AllConstants } from "../_constants";
import { testService } from "../_services";

export const testActions = {
  getAllTests,
};

function getAllTests() {
  return (dispatch) => {
    dispatch(request());

    testService.getAllTests().then(
      (tests) => dispatch(success(tests)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: AllConstants.TESTS_GETALL_REQUEST };
  }
  function success(tests) {
    return { type: AllConstants.TESTS_GETALL_SUCCESS, tests };
  }
  function failure(error) {
    return { type: AllConstants.TESTS_GETALL_FAILURE, error };
  }
}
