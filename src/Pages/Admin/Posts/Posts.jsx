import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Index() {
  localStorage.removeItem("id");
  const goto = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://127.0.0.1:3000/api/v1/posts")
      .then((response) => {
        setPosts(response.data.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function setID(id, content, title, email, password, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("content", content);
    localStorage.setItem("title", title);
  }

  function deletePost(id) {
    console.log(authToken);
    axios
      .delete("http://127.0.0.1:3000/api/v1/posts/" + id, {
        headers: {
            Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div style={{ margin: "2rem" }}>
      <h1 className="text-center mb-4 fs-3">Post Management</h1>
      <table className="table table-striped table-bordered table-hover table-responsive shadow-sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr key={index}>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <Link to={`/admin/posts/edit`}>
                    <button
                      onClick={() =>
                        setID(
                          post._id,
                          post.title,
                          post.content
                        )
                      }
                      className="btn btn-sm btn-warning text-light me-2 rounded-0"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => deletePost(post._id)}
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
          <button type="button" className="btn btn-lg btn-success rounded-0"  onClick={()=>{localStorage.removeItem("id"); goto('/admin/posts/create');}}>
            Create New Post
          </button>
      </div>
    </div>
  );
}

export default Index;
