import { AiOutlineDashboard } from "react-icons/ai";
// import { TbBrandBlogger } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { TbAdjustmentsShare, TbBrandBlogger } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";

export const adminNavLinks = [
  {
    id: "navbloglink",
    title: "Blog",
    dropDown: [
      { id: "navCreateBlog", title: "Create a blog", reactIcons: "MdAdd", visible: true },
      { id: "navEditBlog", title: "Edit a blog", reactIcons: "MdEdit", visible: true },
      { id: "navDeleteBlog", title: "Delete a blog", reactIcons: "MdOutlineDeleteOutline", visible: true },
    ],
    visible: true,
  },
  {
    id: "navcategorylink",
    title: "Category",
    dropDown: [
      { id: "navCreateCategory", title: "Create a category", reactIcons: "MdAdd", visible: true },
      { id: "navEditCategory", title: "Edit a csategory", reactIcons: "MdEdit", visible: true },
      { id: "navDeleteCategory", title: "Delete a csategory", reactIcons: "MdOutlineDeleteOutline", visible: true },
    ],
    visible: true,
  },
];
export const adminSideBarLinks = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: "LuLayoutDashboard",
    link: "/",
    visible: true,
    // whocanAccess:
  },
  {
    id: "blogmanger",
    title: "Blog Manager",
    link: "/blogmanager",
    visible: true,
  },
  {
    id: "categorymanager",
    title: "Category Manager",
    link: "/catergorymanager",
    visible: true,
  },
  {
    id: "socialmanager",
    title: "Social Manager",
    link: "/socialmanager",
    visible: true,
  },
  {
    id: "usermanager",
    title: "Admin Manager",
    link: "/usermanager",
    visible: true,
  },

  // {
  //   id: "",
  //   title: "Admin Manager",
  //   visible: true,
  // },
];

export const AllIcons = {
  dashboard: <AiOutlineDashboard style={{ width: "25px", height: "25px" }} />,
  blogmanger: <TbBrandBlogger style={{ width: "25px", height: "25px" }} />,
  categorymanager: <BiCategory style={{ width: "25px", height: "25px" }} />,
  socialmanager: <TbAdjustmentsShare style={{ width: "25px", height: "25px" }} />,
  usermanager: <MdOutlineManageAccounts style={{ width: "25px", height: "25px" }} />,
};
