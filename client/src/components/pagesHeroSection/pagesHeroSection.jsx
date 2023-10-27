import React from "react";
import styles from "./pagesHeroSection.module.css";

const PagesHeroSection = ({ pageName }) => {
  return <div className={styles.container}>{pageName ? <h1>{pageName}</h1> : <h1>Page Name</h1>}</div>;
};

export default PagesHeroSection;
