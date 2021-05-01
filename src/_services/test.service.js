import config from "config";
import { authHeader } from "../_helpers";
import handleResponse from "./util";
export const testService = {
  getAllTests,
};

function getAllTests() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/api/v1/test-kits/`, requestOptions).then(
    handleResponse
  );
}
