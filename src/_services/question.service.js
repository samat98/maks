import config from "config";
import { authHeader } from "../_helpers";
import handleResponse from "./util";
export const questionService = {
  getAllQuestions,
  setAllAnswers,
};

function getAllQuestions(name_url) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(
    `${config.apiUrl}/api/v1/${name_url}/questions/`,
    requestOptions
  ).then(handleResponse);
}
function setAllAnswers(name_url, answers) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(answers),
  };

  return fetch(
    `${config.apiUrl}/api/v1/${name_url}/answers/`,
    requestOptions
  ).then(handleResponse);
}
