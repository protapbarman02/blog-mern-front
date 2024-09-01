import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Index() {
  const goto = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://127.0.0.1:3000/api/v1/users")
      .then((response) => {
        setUsers(response.data.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function setID(id, firstName, lastName, email, password, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }

  function deleteUser(id) {
    axios
      .delete("http://127.0.0.1:3000/api/v1/users/" + id, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div style={{ margin: "2rem" }}>
      <h1 className="text-center mb-4 fs-3">User Management</h1>
      <table className="table table-striped table-bordered table-hover table-responsive shadow-sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.roles.join(", ")}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/admin/users/edit`}>
                    <button
                      onClick={() =>
                        setID(
                          user._id,
                          user.first_name,
                          user.last_name,
                          user.email,
                          user.password,
                          user.age
                        )
                      }
                      className="btn btn-sm btn-warning text-light me-2 rounded-0"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-sm btn-danger rounded-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 mt-4">
          <button type="button" className="btn btn-lg btn-success rounded-0"  onClick={()=>{localStorage.removeItem("id"); goto('/admin/users/create');}}>
            Create New User
          </button>
      </div>
    </div>
  );
}

export default Index;
