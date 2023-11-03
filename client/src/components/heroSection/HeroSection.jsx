import React from "react";
import styles from "./heroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Where Stories Meet Insights</h1>
      </div>
      <div className={styles.headerImage}>
        {/* <div className={styles.headerImageDiv1}> */}

        <Image src="/heroSection/3.svg" alt="techBanner" width={500} height={500} className={styles.headerImg} priority={true} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
