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
export const heroSectionButtonData = [
  {
    id: "createBlog",
    title: "Set Up Your Blog Instantly",
    desc: "Creating a blog is just a click away. Instantly launch your blog and be on your way to becoming a recognized voice in your niche.",
    icon: "GrAdd",
    buttonText: "Start Writing",
    dashbordView: true,
    blogManagerView: true,
    categoryManagerView: false,
    link: "/blogmanager/create",
  },
  {
    id: "editBlog",
    title: "Edit Your Blog Effortlessly",
    desc: "Polish your blog content with ease. Edit your posts and keep your online presence up-to-date.",
    icon: "GrEdit",
    buttonText: "Edit Blog",
    dashbordView: true,
    blogManagerView: true,
    categoryManagerView: false,
    link: "/blogmanager/edit/:id",
  },
  {
    id: "deleteBlog",
    title: "Delete Your Blog Effortlessly",
    desc: "Polish your blog content with ease. Edit your posts and keep your online presence up-to-date.",
    buttonText: "Delete Blog",
    dashbordView: false,
    blogManagerView: true,
    categoryManagerView: false,
  },

  {
    id: "createCategory",
    title: "Create a New Blog Category",
    desc: "Organize your content with a new category. Enhance the discoverability of your blog posts and keep your site structured.",
    icon: "GrCategory",
    buttonText: "Create Category",
    dashbordView: true,
    blogManagerView: false,
    categoryManagerView: true,
  },

  {
    id: "editCategory",
    title: "Edit Blog Category",
    desc: "Refine and manage your blog categories effortlessly. Edit or update your categories to maintain a well-organized and structured blog.",
    icon: "GrEditCategory",
    buttonText: "Edit Category",
    dashbordView: true,
    blogManagerView: false,
    categoryManagerView: true,
  },
  {
    id: "deleteCategory",
    title: "Delete Your Category Effortlessly",
    desc: "Polish your blog content with ease. Edit your posts and keep your online presence up-to-date.",
    buttonText: "Delete Category",
    dashbordView: false,
    blogManagerView: false,
    categoryManagerView: true,
  },
];
