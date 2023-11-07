import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <div className="container-fluid full-height">
      <div className="row full-height">
        <div className="col-md-3 col-lg-2 col-12 boxshadow" style={{ zIndex: 10 }}>
          <Sidebar />
        </div>
        <div className="col-md-9 col-lg-10 col-12" style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <Navbar />
          <div className="p-3 outletScroll">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
