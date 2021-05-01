import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { questions } from "./questions.reducer";
import { tests } from "./tests.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  questions,
  tests,
  alert,
});

export default rootReducer;
