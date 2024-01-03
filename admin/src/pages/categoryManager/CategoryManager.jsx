import React, { useEffect, useState } from "react";
import HeroSection from "../../components/DashboardSection/HeroSection";
import { API } from "../../service/axiosInstance";

const CategoryManager = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nodata, setNoData] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError(null);
      setNoData(false);
      setLoading(true);
      const response = await API.getAllCategories({});
      if (response) {
        if (response.isSuccess) {
          setLoading(false);
          if (response.data.length > 0) {
            setAllCategories(response.data);
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
  const parseDate = (date) => {
    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    return formattedDate;
  };
  return (
    <div>
      <HeroSection usedfor="CategoryManager" />
      <div className="outerBox">
        {allCategories.length > 0 && (
          <>
            <div className="catHeader row">
              <div className="cattitle col-3"> Category Name</div>
              <div className="cattitle col-3"> Trending Status</div>
              <div className="cattitle col-3"> Created Date</div>
              <div className="cattitle col-3"> Description</div>
            </div>
            {allCategories.map((category, index) => (
              <div className="innerBox row bg-light" key={index}>
                <span className="col-3">{category.categoryName}</span>
                <span className="col-3">{category.isTrending ? "Trending" : "Not trending"}</span>
                <span className="col-3">{parseDate(category.createdAt)}</span>
                <span className="col-3">{category.categoryDesc ? category.categoryDesc : "No description"}</span>
              </div>
            ))}
          </>
        )}
      </div>
      {loading && <>Loading...</>}
      {nodata && !loading && <small className="text-secondary">-- No data found --</small>}
      {error && !loading && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default CategoryManager;
