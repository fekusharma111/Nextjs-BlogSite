import React from "react";
import "./pagesHeroSection.css";

const PagesHeroSection = ({ pageName }) => {
  return <div className="pageherocontainer">{pageName ? <h1>{pageName}</h1> : <h1>Page Name</h1>}</div>;
};

export default PagesHeroSection;
