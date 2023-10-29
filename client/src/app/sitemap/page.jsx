import PagesHeroSection from "@/components/pagesHeroSection/pagesHeroSection";
import React from "react";
import styles from "./page.module.css";

const Sitemap = () => {
  return (
    <div className={styles.container}>
      <PagesHeroSection pageName="SITEMAP" />
      <h3>Sitemap</h3>
    </div>
  );
};

export default Sitemap;
