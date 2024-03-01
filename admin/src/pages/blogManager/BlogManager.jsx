import React, { useEffect, useState } from "react";
import HeroSection from "../../components/DashboardSection/HeroSection";

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
    } catch (error) {
      console.error("Error fetching categories:", error);
      // setLoading(false);
      if (error.originalMessage) {
        setError(error.originalMessage);
      } else {
        setError(error.message.message);
      }
    }
  };

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
