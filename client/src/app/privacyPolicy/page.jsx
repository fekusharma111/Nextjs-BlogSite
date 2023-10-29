import React from "react";
import styles from "./page.module.css";
import PagesHeroSection from "@/components/pagesHeroSection/pagesHeroSection";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <PagesHeroSection pageName="PRIVACY POLICY" />
      <h3>PrivacyPolicy</h3>
    </div>
  );
};

export default PrivacyPolicy;
