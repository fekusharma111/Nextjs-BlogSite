import React from "react";
import "./mainSection.css";
import { DummyBlogPost } from "@/utils/constants";
import Image from "next/image";
import BlogListing from "../blogListing/BlogListing";
import RedirectionButton from "../redirectionButton/RedirectionButton";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

const MainSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <ul className="">
            <BlogListing blogs={DummyBlogPost} isTrending={false} callerName="blogPage" />
          </ul>
        </div>

        <div className="col-lg-4">
          <div className="bg-white border overflow-y-hidden p-3 position-relative rounded trendingBox">
            <h3 className="fs-5 text-center mb-3 fw-semibold">Trending</h3>
            <BlogListing blogs={DummyBlogPost.filter((blog) => blog.trending)} isTrending={true} callerName="homePage" />

            <div className="bottom-0 p-2 position-absolute">
              <Link href="/trendings">
                <FaAngleDown style={{ fill: "var(--PrimaryTeal)" }} />
              </Link>
            </div>
            {/* <RedirectionButton text="Explore" url="/trendings" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
