import React from "react";
import styles from "./page.module.css";
import PagesHeroSection from "@/components/pagesHeroSection/pagesHeroSection";

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <PagesHeroSection pageName="TERMS OF SERVICE" />
      <h3>TermsOfService</h3>
    </div>
  );
};

export default TermsOfService;
