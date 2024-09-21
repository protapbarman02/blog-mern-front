import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div>
      <Header></Header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2024 Blog Inc.</p>
      </footer>
    </div>
  );
}
