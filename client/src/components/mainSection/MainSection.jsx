import React from "react";
import styles from "./mainSection.module.css";
import { DummyBlogPost } from "@/utils/constants";
import Image from "next/image";
import BlogListing from "../blogListing/BlogListing";
import RedirectionButton from "../redirectionButton/RedirectionButton";

const MainSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        Dheeraj
        <BlogListing blogs={DummyBlogPost} isTrending={false} callerName="blogPage" />
      </div>
      <div className={styles.trending}>
        <h3>Trending</h3>
        <BlogListing blogs={DummyBlogPost.filter((blog) => blog.trending)} isTrending={true} callerName="homePage" />
        <RedirectionButton text="Explore" url="/trendings" />
      </div>
    </div>
  );
};

export default MainSection;
