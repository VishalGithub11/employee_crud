import React, { useState } from "react";
import { API } from "./API";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signup = (user) => {
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log("resp", response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name: name, email: email, password: password })
      .then((data) => {
        console.log("data", data);
        if (data.error) {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: data.error,
            success: false,
          });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("error in signup"));
  };

  const signUpForm = () => {
    return (
      <>
        <div>
          {" "}
          <h2>Sign Up here</h2>
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form action="">
                <div className="form-group">
                  <label className="text-dark">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={handleChange("name")}
                    value={name}
                  />
                </div>

                <div className="form-group">
                  <label className="text-dark">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    onChange={handleChange("email")}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label className="text-dark">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    onChange={handleChange("password")}
                    value={password}
                  />
                </div>
                <button
                  className="btn btn-success btn-block"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </form>
              <Link to="/">
                <p>? already a user. Login here</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <p>{success}</p>
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully.
            <Link to="/">Login here</Link>
          </div>
        </div>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Error: {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </>
  );
};

export default SignUp;
