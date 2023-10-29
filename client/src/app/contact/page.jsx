import React from "react";
import styles from "./page.module.css";
import PagesHeroSection from "@/components/pagesHeroSection/pagesHeroSection";

const Contact = () => {
  return (
    <div className={styles.container}>
      <PagesHeroSection pageName="CONTACT US" />

      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          {/* <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          /> */}
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
