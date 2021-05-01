import { AllConstants } from "../_constants";
import { userService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const userActions = {
  login,
  logout,
  register,
};

function login(username, password, from) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push(from);
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: AllConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: AllConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: AllConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: AllConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: AllConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: AllConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: AllConstants.REGISTER_FAILURE, error };
  }
}

