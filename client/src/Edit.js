import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "./API";

const Edit = (props) => {
  const [state, setState] = useState({
    name: "",
    age: "",
    email: "",
    success: false,
  });

  console.log(props.location.state.id);
  const Id = props.location.state.id;

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`${API}/updateemp/${Id}`, state)
      .then(
        (response) => console.log("edit response", response.data),
        setState({ ...state, success: true })
      );
  };

  console.log("edit", state);

  return (
    <div>
      <div className="add_form">
        <div className="form_header">
          <Link to="/home">
            <p> Go to Employ List </p>
          </Link>
          <h3>Edit Details</h3>
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
              type="text"
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
              type="text"
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
            Save Changes
          </button>
        </form>
        {state.success && (
          <div>
            <h3>Details Updated successfully</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
