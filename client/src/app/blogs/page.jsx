import React from "react";
import styles from "./page.module.css";
import { DummyBlogPost } from "@/utils/constants";
import BlogListing from "@/components/blogListing/BlogListing";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.sectionHeader}>TRENDING BLOGS</h2>
        <BlogListing blogs={DummyBlogPost.filter((blog) => blog.trending)} isTrending={true} callerName="blogPage" />
      </div>
      <div>
        <h2 className={styles.sectionHeader}>All BLOGS</h2>
        <BlogListing blogs={DummyBlogPost} isTrending={false} callerName="blogPage" />
      </div>
    </div>
  );
};

export default Blogs;
