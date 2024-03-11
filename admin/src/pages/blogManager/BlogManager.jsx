import React, { useEffect, useState } from "react";
import HeroSection from "../../components/DashboardSection/HeroSection";
import { API } from "../../service/axiosInstance";
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const BlogManager = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nodata, setNoData] = useState(false);
  const [allBlogData, setAllBlogData] = useState([]);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      setError(null);
      setNoData(false);
      setLoading(true);
      const response = await API.getAllBlog({});
      if (response) {
        if (response.isSuccess) {
          setLoading(false);
          if (response.data.length > 0) {
            setAllBlogData(response.data);
          } else {
            setNoData(true);
          }
        }
      } else {
        setLoading(false);
        setError("Something went wrong!");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
      if (error.originalMessage) {
        setError(error.originalMessage);
      } else {
        setError(error.message.message);
      }
    }
  };

  const deleteBlogTempById = async (blog) => {
    try {
      if (window.confirm("Are you sure you want to delete this blog?") === true) {
        const response = await toast.promise(API.updateBlog({ ...blog, activeStatus: false }, true), {
          pending: "Deleting category...",
          success: "Category Deleted👌",
          error: "Error deleting Blog!🤯",
        });
        if (response.isSuccess) {
          const updateBlogData = JSON.parse(response.data);

          setAllBlogData((prevBlogs) => prevBlogs.filter((singleBlog) => singleBlog._id !== updateBlogData._id));

          console.log("deleted documents", JSON.parse(response.data));
        }
        console.log("deleting blog", response);
      } else {
      }
    } catch (error) {
      console.error("error deleting blog", error);
      // setLoading()
      // toast.error("Error deleting blog");
    }
  };

  return (
    <div>
      {/* <BlogManagerHeroGrid /> */}
      <HeroSection usedfor="BlogManager" />
      <div>
        {allBlogData.length > 0 &&
          allBlogData.map((blog, index) => (
            <>
              <h3>{blog.title}</h3>
              <span>{blog.description}</span>
              <div className="card-header-btn">
                <button className="iconbutton ">
                  <MdOutlineRemoveRedEye />
                </button>
                <button className="iconbutton ">
                  <FaEdit />
                </button>
                <button
                  className="iconbutton "
                  onClick={() => {
                    deleteBlogTempById(blog);
                  }}
                >
                  <MdOutlineDelete />
                </button>
              </div>
            </>
          ))}
      </div>
      {loading && <>loading...</>}
      {nodata && !loading && <small className="text-secondary">-- No blog found --</small>}
      {error && !loading && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default BlogManager;
