import React from "react";
import styles from "./footer.module.css";
import FooterNav from "./FooterNav";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className={styles.container}>
      <NewsLetter />
      <FooterNav />
    </div>
  );
};

export default Footer;
