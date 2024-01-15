import "./App.css";
import Login from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";
import BlogManager from "./pages/blogManager/BlogManager";
import CategoryManager from "./pages/categoryManager/CategoryManager";
import SocialManager from "./pages/socialManager/SocialManager";
import UserManager from "./pages/userManager/UserManager";
import CreateBlog from "./pages/blogManager/CreateBlog";
import EditBlog from "./pages/blogManager/EditBlog";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);

  console.log("isAuthenticated", isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="/blogmanager" element={<BlogManager />} />
          <Route path="/blogmanager/create" element={<CreateBlog />} />
          <Route path="/blogmanager/edit/:id" element={<EditBlog />} />
          <Route path="/catergorymanager" element={<CategoryManager />} />
          <Route path="/socialmanager" element={<SocialManager />} />
          <Route path="/usermanager" element={<UserManager />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
