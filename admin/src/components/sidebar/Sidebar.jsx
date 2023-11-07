import React from "react";

const Sidebar = () => {
  let BrandName = "LAYER MATRIX";
  return (
    <>
      <div className="brandName d-flex flex-column align-items-center my-4 mx-0">
        <h3 className="display-10 text-center">{BrandName}</h3>
        <p className="lead text-center">Admin Panel</p>
      </div>
    </>
  );
};

export default Sidebar;
