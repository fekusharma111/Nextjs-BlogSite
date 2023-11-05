import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkisAuthenticated } from "./utils/utils";
import { updateUserDetails } from "./reducers/adminSlicer";

function App() {
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);

  console.log("isAuthenticated", isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
