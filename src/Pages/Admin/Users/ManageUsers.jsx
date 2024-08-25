import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ManageUser() {
  const authToken = localStorage.getItem("authToken");
  const goto = useNavigate();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [mode, setMode] = useState("create");

  const id = localStorage.getItem("id");
  
  useEffect(() => {
    if(id){
        console.log(id);
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
        setAge(localStorage.getItem("age"));
    }
    else{
        console.log("hi")
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      age: age,
    };

    const url = "http://127.0.0.1:3000/api/v1/users/";
    const method = mode === "create" ? "post" : "put";

    axios({
      method: method,
      url: url,
      data: id ? { ...userData, _id: id } : userData,
      headers: {
        Authorization: mode === "edit" ? "Bearer " + authToken : undefined,
      },
    })
      .then((response) => {
        localStorage.removeItem("id");
        goto("/admin/users");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>{mode === "create" ? "Create User" : "Edit User"}</h1>
      <form style={{ margin: "5rem" }}>
        <div className="form-group mb-3" id="firstName">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Enter First Name"
            required
          />
        </div>
        <div className="form-group mb-3" id="lastName">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Enter Last Name"
            required
          />
        </div>
        {mode === "create" && (
          <div className="form-group mb-3" id="email">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </div>
        )}
        {mode === "create" && (
          <div className="form-group mb-3" id="password">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
        )}
        {mode === "edit" && (
          <div className="form-group mb-3" id="age">
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              placeholder="Enter Age"
            />
          </div>
        )}
        <button
          onClick={(e) => handleSubmit(e)}
          className={`btn ${mode === "create" ? "btn-success" : "btn-warning"} rounded-0 me-2`}
          type="submit"
        >
          {mode === "create" ? "Submit" : "Update"}
        </button>
          <button type="button" className="btn btn-primary rounded-0" onClick={()=>{localStorage.removeItem("id"); goto('/admin/users');}}>Home</button>
      </form>
    </div>
  );
}

export default ManageUser;
