import React, { useState } from "react";
import { API } from "../../service/axiosInstance";
import { toast } from "react-toastify";

const CategoryModal = ({ categoryModalData, setCategoryModalData, setAllCategories }) => {
  const [error, setError] = useState({ status: false, message: null });
  const [loading, setLoading] = useState(false);

  const onValueChange = (e) => {
    setError({ status: false, message: null });
    const { id, type, checked, value } = e.target;
    setCategoryModalData({
      ...categoryModalData,
      data: { ...categoryModalData.data, [id]: type === "checkbox" ? checked : value },
    });
  };

  const updateCategory = async (category) => {
    try {
      if (loading) {
        return;
      }
      if (!categoryModalData.data.categoryName || !categoryModalData.data.categoryId) {
        setError({ status: true, message: "Please fill the (*) mark field" });
        return;
      }
      setError({ status: false, message: null });
      setLoading(true);
      const response = await toast.promise(API.updateCategory(categoryModalData.data, true), {
        pending: "Updating category...",
        success: `${categoryModalData.data.categoryName} category updated successfully`,
        error: "Error updating Category!🤯",
      });
      if (response.isSuccess) {
        const updatedCategoryData = JSON.parse(response.data);
        setLoading(false);
        setAllCategories((prevCategories) =>
          prevCategories.map((category) => (category._id === updatedCategoryData._id ? { ...category, ...updatedCategoryData } : category))
        );
        setCategoryModalData({ status: false, usedFor: null, data: null });
        console.log("updated documents", JSON.parse(response.data));
        // alert(` category updated successfully`);
        // resetCategoryField();
      }
    } catch (error) {
      setError({ status: true, message: error.originalMessage ? error.originalMessage : error.message.message });
      setLoading(false);
      console.error("error creating category", error);
    }
  };

  const submitNewCategory = async () => {
    try {
      if (loading) {
        return;
      }
      if (!categoryModalData.data.categoryName || !categoryModalData.data.categoryId) {
        setError({ status: true, message: "Please fill the (*) mark field" });
        return;
      }
      setError({ status: false, message: null });
      setLoading(true);

      const response = await toast.promise(API.createCategory(categoryModalData.data, true), {
        pending: "Creating category...",
        success: `${categoryModalData.data.categoryName} category created successfully`,
        error: "Error creating Category!🤯",
      });
      if (response.isSuccess) {
        setLoading(false);

        setAllCategories((prevCategories) => [...prevCategories, JSON.parse(response.data)]);
        setCategoryModalData({ status: false, usedFor: null, data: null });
        // resetCategoryField();
      }
      // console.log("response getting", response);
    } catch (error) {
      setError({ status: true, message: error.originalMessage ? error.originalMessage : error.message.message });
      setLoading(false);
      console.error("error creating category", error);
    }
  };
  return (
    <div className={`custom-modal ${categoryModalData.status ? "show" : ""}`}>
      {categoryModalData.status && (
        <div className="modal-background">
          <div className="add-category-container">
            <span
              className="close"
              onClick={() => {
                setCategoryModalData({ status: false, usedFor: null, data: null });
              }}
            >
              &times;
            </span>
            <h2>
              {categoryModalData.usedFor === "createCategory"
                ? "Create new Category"
                : categoryModalData.usedFor === "editCategory"
                ? "Edit Category"
                : "Undefined used of modal"}
            </h2>

            <form>
              <div className="form-group">
                <label htmlFor="categoryName">
                  Category Name : <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="categoryName"
                  value={categoryModalData.data.categoryName}
                  placeholder="Category Name..."
                  onChange={(e) => onValueChange(e)}
                  required
                  readOnly={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="categoryId">
                  Category Id : <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="categoryId"
                  value={categoryModalData.data.categoryId}
                  placeholder="Category id..."
                  onChange={(e) => onValueChange(e)}
                  required
                  readOnly={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="categoryDesc">Description :</label>
                <textarea
                  id="categoryDesc"
                  value={categoryModalData.data.categoryDesc}
                  placeholder="Category Desc..."
                  onChange={(e) => onValueChange(e)}
                  readOnly={loading}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="isTrending"
                  checked={categoryModalData.data.isTrending}
                  onChange={(e) => onValueChange(e)}
                  readOnly={loading}
                />
                <label className="form-check-label" htmlFor="isTrending">
                  Is Trending
                </label>
              </div>
              {error.status && (
                <div>
                  <small className="text-danger">{error.message}</small>
                </div>
              )}

              <div className="button-group">
                <button
                  className="createcatbtn"
                  type="button"
                  onClick={() => {
                    if (categoryModalData.usedFor === "createCategory") {
                      submitNewCategory(categoryModalData.data);
                    } else if (categoryModalData.usedFor === "editCategory") {
                      updateCategory(categoryModalData.data);
                    }
                  }}
                >
                  {categoryModalData.usedFor === "createCategory" && loading ? (
                    <>Creating...</>
                  ) : categoryModalData.usedFor === "createCategory" ? (
                    <>Create</>
                  ) : categoryModalData.usedFor === "editCategory" && loading ? (
                    <>Updating...</>
                  ) : (
                    <>Update</>
                  )}
                </button>
                <button
                  className="createcatbtn"
                  type="button"
                  onClick={() => {
                    setCategoryModalData({ status: false, usedFor: null, data: null });
                  }}
                  style={{ marginLeft: "15px" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryModal;
