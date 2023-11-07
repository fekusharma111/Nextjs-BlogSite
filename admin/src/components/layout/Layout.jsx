import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <div className="container-fluid full-height">
      <div className="row full-height">
        <div className="col-md-3 col-lg-2 col-12 sidebar">
          <Sidebar />
        </div>
        <div className="col-md-9 col-lg-10 col-12">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
