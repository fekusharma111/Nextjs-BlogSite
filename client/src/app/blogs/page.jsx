import React from "react";
import "./page.css";
import { DummyBlogPost } from "@/utils/constants";
import BlogListing from "@/components/blogListing/BlogListing";

const Blogs = () => {
  return (
    <div className="blogContainer">
      <div>
        <h2 className="blogsectionHeader">TRENDING BLOGS</h2>
        <BlogListing blogs={DummyBlogPost.filter((blog) => blog.trending)} isTrending={true} callerName="blogPage" />
      </div>
      <div>
        <h2 className="blogsectionHeader">All BLOGS</h2>
        <BlogListing blogs={DummyBlogPost} isTrending={false} callerName="blogPage" />
      </div>
    </div>
  );
};

export default Blogs;
