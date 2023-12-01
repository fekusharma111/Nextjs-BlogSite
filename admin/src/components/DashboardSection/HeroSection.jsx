import React from "react";
import "./dashboardSection.css";
import { heroSectionButtonData } from "../../constants/data";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ usedfor }) => {
  const navigate = useNavigate();
  const handleHeroBtn = (data) => {
    console.log("heroBtnClick", data);
    if (data.id === "createCategory") {
      navigate("/catergorymanager/create");
    }
  };
  return (
    <div className={`${usedfor}_heroContainer`}>
      {heroSectionButtonData.map((item) =>
        (usedfor === "Dashboard" && item.dashbordView) ||
        (usedfor === "BlogManager" && item.blogManagerView) ||
        (usedfor === "CategoryManager" && item.categoryManagerView) ? (
          <div className={`${item.id} column`} key={item.id}>
            <div className="cardContent position-relative p-3" style={{ zIndex: "10" }}>
              <h2>{item.title}</h2>
              <span>{item.desc}</span>
            </div>
            <button
              className="cardButton"
              onClick={() => {
                handleHeroBtn(item);
              }}
            >
              {item.buttonText}
            </button>
          </div>
        ) : null
      )}
      {usedfor && usedfor === "Dashboard" && <div className="column5 column"></div>}
    </div>
  );
};

export default HeroSection;
