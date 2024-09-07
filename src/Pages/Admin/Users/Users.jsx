import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Index() {
  const goto = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState({ field: "first_name", order: 1 });
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [currentPage, sort, searchText, limit]);

  function getData() {
    setLoading(true);

    axios
      .get("http://127.0.0.1:3000/api/v1/users", {
        params: {
          page: currentPage,
          sort: JSON.stringify([{ [sort.field]: sort.order }]),
          search_text: searchText,
          limit: limit,
        },
      })
      .then((response) => {
        setUsers(response.data.data.users);
        setTotalPages(response.data.data.total_page);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
      .then(() => {
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSortChange = (field) => {
    setSort((prevSort) => ({
      field: field,
      order: prevSort.field === field ? (prevSort.order === 1 ? -1 : 1) : 1,
    }));
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  };

  const getSortIcon = (field) => {
    if (sort.field === field) {
      return sort.order === 1 ? "▲" : "▼";
    }
    return "▼";
  };

  return (
    <div>
      <p className="text-center mb-2 fs-3">User Management</p>

      <div className="flex mb-4">
        <div className="flex-1">
          <button
            type="button"
            className="btn btn-sm btn-dark rounded-0"
            onClick={() => {
              localStorage.removeItem("id");
              goto("/admin/users/create");
            }}
          >
            Create New User
          </button>
        </div>
        <div className="flex-1 text-end">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search users"
            className="form-control-sm border rounded-0"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center mt-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <table className="table table-striped table-bordered table-hover table-responsive shadow-sm">
            <thead>
              <tr>
                <th onClick={() => handleSortChange("first_name")}>
                  First Name <span>{getSortIcon("first_name")}</span>
                </th>
                <th onClick={() => handleSortChange("last_name")}>
                  Last Name <span>{getSortIcon("last_name")}</span>
                </th>
                <th onClick={() => handleSortChange("email")}>
                  Email <span>{getSortIcon("email")}</span>
                </th>
                <th onClick={() => handleSortChange("age")}>
                  Age <span>{getSortIcon("age")}</span>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
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
                          className="btn btn-sm btn-light border me-2 rounded-0"
                        >
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="btn btn-sm btn-dark rounded-0"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="d-flex justify-content-between mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="btn btn-sm btn-dark rounded-0"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="btn btn-sm btn-dark rounded-0"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
