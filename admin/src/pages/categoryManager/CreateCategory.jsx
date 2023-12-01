import React, { useState } from "react";
import "./category.css";

const CreateCategory = () => {
  const [inputState, setInputState] = useState({
    categoryName: "",
    categoryId: "",
    categoryDesc: "",
  });

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setInputState({ ...inputState, [e.target.id]: e.target.value });
  };
  return (
    <div className="add-category-container">
      <h2>Add Category</h2>
      <form>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name:</label>
          <input type="text" id="categoryName" value={inputState.categoryName} placeholder="Category Name..." onChange={(e) => onValueChange(e)} />
        </div>

        <div className="form-group">
          <label htmlFor="categoryId">Category Id:</label>
          <input type="text" id="categoryId" value={inputState.categoryId} placeholder="Category id..." onChange={(e) => onValueChange(e)} />
        </div>

        <div className="form-group">
          <label htmlFor="categoryDescription">Description:</label>
          <textarea id="categoryDescription" value={inputState.categoryDesc} placeholder="Category Desc..." onChange={(e) => onValueChange(e)} />
        </div>

        <div className="button-group">
          <button type="button">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
