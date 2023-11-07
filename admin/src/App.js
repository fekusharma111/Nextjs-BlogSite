import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);

  console.log("isAuthenticated", isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="dashboard" element={< />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
