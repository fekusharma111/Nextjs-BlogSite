import React from "react";
import "./dashboardSection.css";
import { heroSectionButtonData } from "../../constants/data";

const HeroSection = ({ usedfor }) => {
  return (
    <div className={`${usedfor}_heroContainer`}>
      {heroSectionButtonData.map(
        (item) =>
          usedfor ===
          "Dashboard"(
            <div className={`${item.id} column`} key={item.id}>
              <div className="cardContent">
                <h2>{item.title}</h2>
                <span>{item.desc}</span>
              </div>
              <button>{item.buttonText}</button>
            </div>
          )
      )}
      {usedfor && usedfor === "Dashboard" && <div className="column5 column"></div>}
    </div>
  );
};

export default HeroSection;
