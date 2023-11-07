import React from "react";
import HeroSection from "../../components/DashboardSection/HeroSection";
import DashboardTrafficSection from "../../components/DashboardSection/DashboardTrafficSection";
import DashboardBlogTable from "../../components/DashboardSection/DashboardBlogTable";

const Dashboard = () => {
  return (
    <div>
      <HeroSection />
      <DashboardTrafficSection />
      <DashboardBlogTable />
    </div>
  );
};

export default Dashboard;
