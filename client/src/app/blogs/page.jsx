import React from "react";
import styles from "./page.module.css";
import { DummyBlogPost } from "@/utils/constants";
import BlogListing from "@/components/blogListing/BlogListing";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <BlogListing blogs={DummyBlogPost.filter((blog) => blog.trending)} isTrending />
      <BlogListing blogs={DummyBlogPost} />
    </div>
  );
};

export default Blogs;
