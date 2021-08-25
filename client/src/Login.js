import React, { useState } from "react";
import { API } from "./API";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: false,
    didRedirect: false,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const signin = (user) => {
      return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          return response.json();
        })
        .catch((err) => console.log(err));
    };

    const authenticate = (data, next) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
      }
    };

    signin({
      email: state.email,
      password: state.password,
    })
      .then((data) => {
        console.log(data);
        authenticate(data, () => {
          setState({
            ...state,
            didRedirect: true,
          });
        });
      })
      .catch(console.log("sign in failed"));
  };

  const signinform = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={state.email}
            onChange={handleChange("email")}
            required
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={handleChange("password")}
            required
          />

          <input type="submit" value="Login" />
        </form>
      </>
    );
  };

  const performRedirect = () => {
    if (state.didRedirect) {
      return <Redirect to="/home" />;
    }
  };

  return (
    <div>
      {signinform()}
      {performRedirect()}
    </div>
  );
};

export default Login;
