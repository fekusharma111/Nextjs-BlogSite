import React, { useState } from "react";
import "./category.css";
import { API } from "../../service/axiosInstance";

const CreateCategory = () => {
  const [error, setError] = useState({ status: false, message: null });
  const [loading, setLoading] = useState(false);
  const [inputState, setInputState] = useState({
    categoryName: "",
    categoryId: "",
    categoryDesc: "",
    isTrending: false,
  });

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setError({ status: false, message: null });
    if (e.target.id == "isTrending") {
      setInputState({ ...inputState, [e.target.id]: e.target.checked });
    } else {
      setInputState({ ...inputState, [e.target.id]: e.target.value });
    }
  };

  const submitNewCategory = async () => {
    try {
      if (loading) {
        return;
      }
      if (!inputState.categoryName || !inputState.categoryId) {
        setError({ status: true, message: "Please fill the (*) mark field" });
        return;
      }
      setError({ status: false, message: null });
      setLoading(true);
      const response = await API.createCategory(inputState, true);
      if (response.isSuccess) {
        setLoading(false);
        alert(`${inputState.categoryName} category added successfully`);
        resetCategoryField();
      }
      // console.log("response getting", response);
    } catch (error) {
      setError({ status: true, message: error.originalMessage ? error.originalMessage : error.message.message });
      console.error("error creating category", error);
    }
  };
  const resetCategoryField = () => {
    setInputState({
      categoryName: "",
      categoryId: "",
      categoryDesc: "",
      isTrending: false,
    });
  };
  return (
    <div className="add-category-container">
      <h2>Add Category</h2>
      <form>
        <div className="form-group">
          <label htmlFor="categoryName">
            Category Name : <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="categoryName"
            value={inputState.categoryName}
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
            value={inputState.categoryId}
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
            value={inputState.categoryDesc}
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
            checked={inputState.isTrending}
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
              submitNewCategory();
            }}
          >
            {loading ? <>Saving...</> : <>Save</>}
          </button>
          <button
            categoryName="createcatbtn"
            type="button"
            onClick={() => {
              resetCategoryField();
            }}
            style={{ marginLeft: "15px" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
