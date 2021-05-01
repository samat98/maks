import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

function RegisterPage() {
  const [user, setUser] = useState({
    first_name: "",
    email: "",
    last_name: "",
    username: "",
    password: "",
    password2: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const registering = useSelector((state) => state.registration.registering);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (
      user.first_name &&
      user.last_name &&
      user.email &&
      user.username &&
      user.password &&
      user.password2
    ) {
      console.log(`user`, user);
      dispatch(userActions.register(user));
    }
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.first_name ? " is-invalid" : "")
            }
          />
          {submitted && !user.first_name && (
            <div className="invalid-feedback">First Name is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.last_name ? " is-invalid" : "")
            }
          />
          {submitted && !user.last_name && (
            <div className="invalid-feedback">Last Name is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.username ? " is-invalid" : "")
            }
          />
          {submitted && !user.username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !user.email ? " is-invalid" : "")
            }
          />
          {submitted && !user.email && (
            <div className="invalid-feedback">Email is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.password ? " is-invalid" : "")
            }
          />
          {submitted && !user.password && (
            <div className="invalid-feedback">Password is required</div>
          )}
          {submitted && user.password != user.password2 && (
            <div className="invalid-feedback">Passwords are not match</div>
          )}
        </div>
        <div className="form-group">
          <label>Password2</label>
          <input
            type="password"
            name="password2"
            value={user.password2}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.password2 ? " is-invalid" : "")
            }
          />
          {submitted && !user.password2 && (
            <div className="invalid-feedback">Password2 is required</div>
          )}
          {submitted && user.password != user.password2 && (
            <div className="invalid-feedback">Passwords are not match</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {registering && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Register
          </button>
          <Link to="/login" className="btn btn-link">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export { RegisterPage };
