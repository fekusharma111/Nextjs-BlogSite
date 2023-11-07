import React from "react";
import "./dashboardSection.css";

const DashboardTrafficSection = () => {
  return (
    <div className="dashboardTrafficSectionContainer">
      <div className="circleChart column">Circle Chart</div>
      <div className="trafficsource column">Traffic Source</div>
    </div>
  );
};

export default DashboardTrafficSection;
