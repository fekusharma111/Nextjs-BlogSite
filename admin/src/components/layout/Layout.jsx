import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import { Bounce, ToastContainer } from "react-toastify";

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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default Layout;
