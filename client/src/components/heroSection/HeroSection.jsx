import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="herocontainer">
      <div className="container">
         <div className="row">
        <div className="col-md-6 herotitle_head">
        <h1 className="herotitle">Where Stories Meet Insights</h1>
      </div>
      <div className="col-md-6">
      <div className="headerImage"><img src="home_banner.svg"/></div>
      </div>
      </div>
      </div>
  
    </div>
  );
};

export default HeroSection;
