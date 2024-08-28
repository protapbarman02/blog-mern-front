import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ManagePost() {
  const authToken = localStorage.getItem("authToken");
  const goto = useNavigate();
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mode, setMode] = useState("");

  const id = localStorage.getItem("id");

  useEffect(() => {
    if(id){
        console.log(id);
        setTitle(localStorage.getItem("title"));
        setContent(localStorage.getItem("content"));
        setMode("edit");
    }
    else{
        setMode("create");
    }

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title: title,
      content: content
    };

    const url = "http://127.0.0.1:3000/api/v1/posts/";
    const method = mode === "create" ? "post" : "put";

    axios({
      method: method,
      url: url,
      data: id ? { ...postData, _id: id } : postData,
      headers: {
        Authorization: "Bearer " + authToken,
      },
    })
      .then((response) => {
        localStorage.removeItem("id");
        goto("/admin/posts");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>{mode === "create" ? "Create Post" : "Edit Post"}</h1>
      <form style={{ margin: "5rem" }}>
        <div className="form-group mb-3" id="title">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="form-group mb-3" id="content">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Enter Content"
            required
          />
        </div>
        
        <button
          onClick={(e) => handleSubmit(e)}
          className={`btn ${mode === "create" ? "btn-success" : "btn-warning"} rounded-0 me-2`}
          type="submit"
        >
          {mode === "create" ? "Submit" : "Update"}
        </button>
          <button type="button" className="btn btn-primary rounded-0" onClick={()=>{localStorage.removeItem("id"); goto('/admin/posts');}}>Home</button>
      </form>
    </div>
  );
}

export default ManagePost;
