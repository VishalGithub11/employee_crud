import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "./API";
import axios from "axios";

const EmployeeList = ({ search }) => {
  const [List, setList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${API}/getallemp`;
      const res = await axios.get(url);
      const data = res.data;
      setList(data);
    };
    fetchData();
  }, []);

  console.log(List);
  const handleDelete = (id) => {
    const url = `${API}/deleteemp/${id}`;
    const res = axios.delete(url);
    console.log(res);
    window.location.reload();
  };
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Edit</th>
              <th scopr="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {List &&
              List.filter((val, index) => {
                if (search == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              }).map((item, index) => (
                <tr className="mt-1">
                  <th scope="row">{index + 1}</th>

                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/edit",
                        state: {
                          id: item._id,
                        },
                      }}
                    >
                      <button type="button" class="btn btn-primary">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
