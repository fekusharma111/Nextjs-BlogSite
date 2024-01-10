import React, { useEffect, useState } from "react";

import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../reducers/adminSlicer";
import { API } from "../../service/axiosInstance";
import { checkisAuthenticated, setExpirationDate } from "../../utils/utils";

const Login = () => {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({
    userName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  // const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);
  useEffect(() => {
    const authenticationCheck = async () => {
      // setPageLoading()
      setPageLoading(true);
      let authDetails = await checkisAuthenticated();
      // if(authDetails.isAuthenticated){
      // setTimeout(() => {
      if (authDetails.isAuthenticated) {
        setPageLoading(false);
        dispatch(updateUserDetails({ isAuthenticated: authDetails.isAuthenticated }));
      } else {
        setPageLoading(false);
      }
      // }, 2000);
      // }
    };
    authenticationCheck();
  }, [dispatch]);

  const handleLogin = async (e) => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await API.userlogin(inputState);
        if (response) {
          if (response.isSuccess) {
            let userData = JSON.parse(response.data);
            console.log("response in login.jsx", JSON.parse(response.data));
            setExpirationDate();
            // const expirationTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
            // document.cookie = `sessionToken=${sessionToken}; expires=${expirationTime.toUTCString()}`;
            dispatch(updateUserDetails({ isAuthenticated: true, userDetails: userData }));
            setLoading(false);
          }
        } else {
          setLoading(false);
          setError("Something went wrong!");
        }
      } catch (error) {
        console.log("response", error);
        setLoading(false);
        if (error.originalMessage) {
          setError(error.originalMessage);
        } else {
          setError(error.message.message);
        }
        // setError("An error occurred: " + error.originalMessage ? error.originalMessage.message : error.message.message);
      }
    }
  };
  const handleInputChange = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };
  return (
    <>
      {pageLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="logincontainer" id="container">
          <div className="loginform">
            <h1>Sign in</h1>
            <input name="userName" type="text" placeholder="Username" value={inputState.userName} onChange={(e) => handleInputChange(e)} />
            <input name="password" type="password" placeholder="Password" value={inputState.password} onChange={(e) => handleInputChange(e)} />
            {error && <div style={{ color: "red" }}>{error}</div>}
            <button className="loginbutton" onClick={() => handleLogin()} style={{ cursor: loading ? "not-allowed" : "pointer" }}>
              {loading ? <div>Loading...</div> : <div>Sign In</div>}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
