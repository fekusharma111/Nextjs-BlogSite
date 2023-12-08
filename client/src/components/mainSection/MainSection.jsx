import React from "react";
import  "./mainSection.css";
import { DummyBlogPost } from "@/utils/constants";
import Image from "next/image";
import BlogListing from "../blogListing/BlogListing";
import RedirectionButton from "../redirectionButton/RedirectionButton";

const MainSection = () => {
  return (
    <div className="mainsectioncontainer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
      <div className="bolg_details">

        <BlogListing  blogs={DummyBlogPost} isTrending={false} callerName="homePage"  />
      </div>
      </div>
      <div className="col-lg-4">
      <div className="trending_wrp">
        <h3>Trending</h3>
        <BlogListing blogs={DummyBlogPost.filter((blog) => blog.trending)} isTrending={true} callerName="homePage" />
        <RedirectionButton text="Explore" url="/trendings" />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default MainSection;
