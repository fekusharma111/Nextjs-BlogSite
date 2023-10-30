import React from "react";
import styles from "./page.module.css";
import PagesHeroSection from "@/components/pagesHeroSection/pagesHeroSection";
import BlogListing from "@/components/blogListing/BlogListing";
import { DummyBlogPost } from "@/utils/constants";

const Trendings = () => {
  return (
    <div className={styles.container}>
      <PagesHeroSection pageName="TRENDING BLOGS" />
      <BlogListing blogs={DummyBlogPost.filter((blog) => blog.trending)} isTrending={true} callerName="trendingPage" />
    </div>
  );
};

export default Trendings;
