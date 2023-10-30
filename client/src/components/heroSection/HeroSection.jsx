import React from "react";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Where Stories Meet Insights</h1>
      </div>
      <div className={styles.headerImage}></div>
    </div>
  );
};

export default HeroSection;
