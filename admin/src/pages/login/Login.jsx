import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="logincontainer" id="container">
      <div className="loginform">
        <h1>Sign in</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
