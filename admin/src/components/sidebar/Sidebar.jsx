import React, { useState } from "react";
import "./sidebar.css";
import { AllIcons, adminSideBarLinks } from "../../constants/data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  let BrandName = "LAYER MATRIX";
  const [selectedLink, setSelectedLink] = useState(adminSideBarLinks[0]);

  return (
    <>
      <div className="brandName d-flex flex-column align-items-center my-4 mx-0">
        <h3 className="display-10 text-center">{BrandName}</h3>
        <p className="lead text-center">Admin Panel</p>
      </div>
      <hr />
      <div>
        {adminSideBarLinks.map(
          (item) =>
            item.visible && (
              <Link
                to={item.link}
                key={item.id}
                className={`d-flex align-items-center sidelink ${item.id === selectedLink?.id ? "active" : ""}`}
                onClick={() => setSelectedLink(item)}
              >
                {AllIcons[item.id] && <div style={{ marginRight: "10px" }}>{AllIcons[item.id]}</div>}
                <span className="ml-2">{item.title}</span>
              </Link>
            )
        )}
      </div>
    </>
  );
};

export default Sidebar;
