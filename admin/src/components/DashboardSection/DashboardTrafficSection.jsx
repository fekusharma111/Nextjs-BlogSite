import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "./dashboardSection.css";
// import faker from "faker";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
const DashboardTrafficSection = () => {
  const dougnoutData = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "data",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgb(57, 169, 165)", "rgb(20, 56, 61)", "yellow", "rgb(84, 110, 122)", "rgb(30, 136, 229)", "orange"],
      },
    ],
  };

  const Baroptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Traffic Source",
      },
    },
  };
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];
  const Bardata = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        backgroundColor: "rgba(57, 169, 165,0.8)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        backgroundColor: "rgba(84, 110, 122,0.5)",
      },
    ],
  };
  return (
    <div className="dashboardTrafficSectionContainer">
      <div className="circleChart column">
        <Doughnut data={dougnoutData} style={{ margin: "auto" }} />
      </div>
      <div className="trafficsource column">
        <Bar options={Baroptions} data={Bardata} style={{ margin: "auto" }} />
      </div>
    </div>
  );
};

export default DashboardTrafficSection;
