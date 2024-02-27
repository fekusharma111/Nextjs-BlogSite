import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ReactQuill from "react-quill";
import { generateSlug } from "../../utils/utils";
import { toast } from "react-toastify";
import { API } from "../../service/axiosInstance";

const CreateBlog = () => {
  const [state, setState] = useState({
    title: "",
    slug: "",
    description: "",
    isTrending: false,
  });
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  const handleBlogInput = (e) => {
    error.status && setError({ status: false, message: null });
    const { name, type, checked, value } = e.target;
    if (name === "title") {
      const autoSlug = generateSlug(value);
      setState({ ...state, title: value, slug: autoSlug });
    } else {
      setState({ ...state, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleBlogSubmit = async () => {
    try {
      if (loading) {
        return;
      }
      if (!state.title || !state.slug) {
        setError({ status: true, message: "Please fill the (*) mark field" });
        toast.error("Please fill the (*) mark field !");
        return;
      }
      setError({ status: false, message: null });
      setLoading(true);
      const payload = { ...state, content };

      const response = await toast.promise(API.createBlog(payload, true), {
        pending: "Publishing...",
        success: `"/${state.slug}" blog created successfully`,
        error: "Error publishing blog!🤯",
      });
      setLoading(false);
      console.log("response of blog publishing", response);
    } catch (error) {
      setError({ status: true, message: error.originalMessage ? error.originalMessage : error.message.message });
      toast.error(error.originalMessage ? error.originalMessage : error.message.message);
      console.error("Error submitting blog", error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="btn btn-light m-1">
          <MdOutlineRemoveRedEye />
        </button>
        <button className="btn btn-primary m-1" onClick={() => handleBlogSubmit()}>
          Publish
        </button>
      </div>
      <div className="form">
        <h3>Blog Editor</h3>
        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="blogTitle">
              Title <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="blogTitle"
              placeholder="Enter your blog title..."
              name="title"
              value={state.title}
              onChange={handleBlogInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="blogSlug">
              Slug <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="blogSlug"
              placeholder="Enter your blog slug..."
              name="slug"
              value={state.slug}
              onChange={handleBlogInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="blogDesc">Description</label>
            <input
              type="text"
              className="form-control"
              id="blogDesc"
              placeholder="Enter your blog description..."
              name="description"
              value={state.description}
              onChange={handleBlogInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="blogContent">
              Content <span className="text-danger">*</span>
            </label>
            <ReactQuill id="content" theme="snow" modules={modules} formats={formats} value={content} onChange={setContent} />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="isTrending" value={state.isTrending} onChange={handleBlogInput} /> Trending
            </label>
          </div>
          {error.status && <small className="text-danger">{error.message}</small>}
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
