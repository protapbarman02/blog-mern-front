import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Index() {
  localStorage.removeItem("id");
  const goto = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://127.0.0.1:3000/api/v1/comments")
      .then((response) => {
        console.log(response.data)
        setComments(response.data.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function setID(id, content) {
    localStorage.setItem("id", id);
    localStorage.setItem("content", content);
  }

  function deleteComment(id) {
    console.log(authToken);
    axios
      .delete("http://127.0.0.1:3000/api/v1/comments/" + id, {
        headers: {
            Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        setComments(comments.filter((comments) => comments._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div style={{ margin: "2rem" }}>
      <h1 className="text-center mb-4 fs-3">Comment Management</h1>
      <table className="table table-striped table-bordered table-hover table-responsive shadow-sm">
        <thead>
          <tr>
            <th>Post</th>
            <th>Content</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comments, index) => {
            return (
              <tr key={index}>
                <td>{comments.post}</td>
                <td>{comments.content}</td>
                <td>{comments.author}</td>
                <td>
                  <Link to={`/admin/comments/edit`}>
                    <button
                      onClick={() =>
                        setID(
                          comments._id,
                          comments.content
                        )
                      }
                      className="btn btn-sm btn-warning text-light me-2 rounded-0"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteComment(comments._id)}
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
          <button type="button" className="btn btn-lg btn-success rounded-0"  onClick={()=>{localStorage.removeItem("id"); goto('/admin/comments/create');}}>
            Create New Comment
          </button>
      </div>
    </div>
  );
}

export default Index;
