import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Components/Shared/Layout";
import UserLayout from "./Components/Blog/UserLayout";
import ProfileLayout from "./Components/Blog/ProfileLayout";


import Dashboard from "./Pages/Admin/Dashboard";

import Users from "./Pages/Admin/Users/Users";
import ManageUsers from "./Pages/Admin/Users/ManageUsers";

import Posts from "./Pages/Admin/Posts/Posts";
import ManagePosts from "./Pages/Admin/Posts/ManagePosts";

import Roles from "./Pages/Admin/Roles/Roles";
import ManageRoles from "./Pages/Admin/Roles/ManageRoles";

import Comments from "./Pages/Admin/Comments/Comments";
import ManageComments from "./Pages/Admin/Comments/ManageComments";

import Likes from "./Pages/Admin/Likes/Likes";
import ManageLikes from "./Pages/Admin/Likes/ManageLikes";

import AdminProfile from "./Pages/Admin/Profile";

import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import ChangePassword from "./Pages/Auth/ChangePassword";
import RecoverPassword from "./Pages/Auth/RecoverPassword";

import Home from "./Pages/User/Home";

import Profile from "./Pages/User/Profile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<AdminProfile />} />

            <Route path="users" element={<Users />} />
            <Route path="users/create" element={<ManageUsers />} />
            <Route path="users/edit" element={<ManageUsers />} />

            <Route path="posts" element={<Posts />} />
            <Route path="posts/create" element={<ManagePosts />} />
            <Route path="posts/edit" element={<ManagePosts />} />

            <Route path="roles" element={<Roles />} />
            <Route path="roles/create" element={<ManageRoles />} />
            <Route path="roles/edit" element={<ManageRoles />} />

            <Route path="comments" element={<Comments />} />
            <Route path="comments/create" element={<ManageComments />} />
            <Route path="comments/edit" element={<ManageComments />} />

            <Route path="likes" element={<Likes />} />
            <Route path="manage-likes" element={<ManageLikes />} />
          </Route>

          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="recover-password" element={<RecoverPassword />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Separate route for Profile with ProfileLayout */}
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
          </Route>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
