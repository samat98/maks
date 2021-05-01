import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { testActions } from "../_actions";

function HomePage() {
  const tests = useSelector((state) => state.tests);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testActions.getAllTests());
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Hi {user.firstName}!</h1>
      <p>You're logged in with React Hooks!!</p>
      <h3>All registered tests:</h3>
      {tests.loading && <em>Loading tests...</em>}
      {tests.error && <span className="text-danger">ERROR: {tests.error}</span>}
      {tests.items && (
        <ul>
          {tests.items.map((test, index) => (
            <li key={test.id}>
              <Link to={`/tests/${test.name_url}`}>{test.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
}

export { HomePage };
