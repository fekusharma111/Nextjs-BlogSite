import React from "react";
import "./heroSection.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-5 col-xxl-6">
            <h1 className={`display-2 fw-semibold text-center text-lg-start text-white title my-4`}>Where Stories Meet Insights</h1>
          </div>
          <div className=" col-sm-12 col-md-6 col-lg-6 col-xl-5 col-xxl-6 text-end">
            <Image src="/heroSection/3.svg" alt="techBanner" width={430} height={430} className="img-fluid" priority={true} />
          </div>
        </div>
      </div>
    </>
    // <div className={styles.container}>
    //   <div className={styles.headerContent}>
    //
    //   </div>
    //   <div className={styles.headerImage}>
    //     {/* <div className={styles.headerImageDiv1}> */}

    //
    //     {/* </div> */}
    //   </div>
    // </div>
  );
};

export default HeroSection;
