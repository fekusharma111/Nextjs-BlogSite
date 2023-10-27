import React from "react";
import styles from "./footer.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.newslettercontainer}>
      <div className={styles.newsLetterHeader}>
        <h1>Subscribe to our blog. </h1>
        <p>I post fresh content every week.</p>
      </div>
      <div className={styles.newsLetterBtnBox}>
        <input type="email" className="emaiInputnewsletter" placeholder="Email address" />
        <button className="subscribeBtn">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default NewsLetter;
