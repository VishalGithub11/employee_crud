import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "./API";

const AddEmp = () => {
  const [state, setState] = useState({
    name: "",
    age: "",
    email: "",
    success: false,
    error: false,
  });

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/createemp`, state)
      .then(
        (response) => console.log(response.data),
        setState({ ...state, success: true })
      )
      .catch(() => {
        setState({ ...state, error: true });
      });
  };

  const addform = () => {
    return (
      <div className="add_form">
        <div className="form_header">
          <Link to="/home">
            <p> Go to Employ List </p>
          </Link>
          <h3>Add Employee</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Name"
              name="name"
              value={state.name}
              onChange={handleChange("name")}
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={handleChange("email")}
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="age"
              name="age"
              value={state.age}
              onChange={handleChange("age")}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
        {state.success && (
          <div>
            <h3>Employee Added Successfully</h3>
          </div>
        )}
      </div>
    );
  };

  return <>{addform()}</>;
};

export default AddEmp;
