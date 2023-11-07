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
