import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="box1">
        <div className="header">
          <div className="add">
            <Link to="/addempl">
              <p>Add Employee + </p>
            </Link>
          </div>

          <h3>Employee List</h3>
          <input
            name="searchbar"
            className="search_bar"
            placeholder="Search...."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <EmployeeList search={search} />
    </div>
  );
};

export default Home;
