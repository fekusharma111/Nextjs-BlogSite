import React from "react";
import BlogManagerHeroGrid from "../../components/blogManagmentSection/BlogManagerHeroGrid";
import HeroSection from "../../components/DashboardSection/HeroSection";

const BlogManager = () => {
  return (
    <div>
      {/* <BlogManagerHeroGrid /> */}
      <HeroSection usedfor="BlogManager" />
      {/* <DashboardTrafficSection />
      <DashboardBlogTable /> */}
    </div>
  );
};

export default BlogManager;
