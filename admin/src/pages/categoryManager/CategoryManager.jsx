import React, { useEffect, useState } from "react";
import { API } from "../../service/axiosInstance";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-toastify";
import CategoryModal from "./CategoryModal";

const CategoryManager = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nodata, setNoData] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [categoryModalData, setCategoryModalData] = useState({ status: false, data: null });

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
  const editCategory = (category) => {
    setCategoryModalData({ status: true, usedFor: "editCategory", data: category });
  };
  const deleteCategoryTempById = async (category) => {
    try {
      if (window.confirm("Are you sure you want to delete this category?") == true) {
        const response = await toast.promise(API.updateCategory({ ...category, activeStatus: false }, true), {
          pending: "Deleting category...",
          success: "Category Deleted👌",
          error: "Error deleting Category!🤯",
        });
        if (response.isSuccess) {
          const updatedCategoryData = JSON.parse(response.data);

          setAllCategories((prevCategories) => prevCategories.filter((singlecategory) => singlecategory._id !== updatedCategoryData._id));

          console.log("deleted documents", JSON.parse(response.data));
        }
        console.log("deleting categories", response);
      } else {
      }
    } catch (error) {}
  };
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCategoryModalData({
            status: true,
            usedFor: "createCategory",
            data: { categoryName: "", categoryId: "", categoryDesc: "", isTrending: false },
          });
        }}
      >
        Create new Category
      </button>
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
                <div className="col-3 d-flex justify-content-between">
                  <span>{category.categoryDesc ? category.categoryDesc : "No description"}</span>
                  <div className="iconBtn">
                    <button
                      className="iconbutton "
                      onClick={() => {
                        editCategory(category);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="iconbutton "
                      onClick={() => {
                        deleteCategoryTempById(category);
                      }}
                    >
                      <MdOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {loading && <>Loading...</>}
      {nodata && !loading && <small className="text-secondary">-- No data found --</small>}
      {error && !loading && <small className="text-danger">{error}</small>}

      <CategoryModal categoryModalData={categoryModalData} setCategoryModalData={setCategoryModalData} setAllCategories={setAllCategories} />
    </div>
  );
};

export default CategoryManager;
