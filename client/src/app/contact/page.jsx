import React from "react";
import "./page.css";
import PagesHeroSection from "@/components/pagesHeroSection/pagesHeroSection";

const Contact = () => {
  return (
    <div >
      <PagesHeroSection pageName="CONTACT US" />

      <h1 >Lets Keep in Touch</h1>
      <div >
        <div >
          {/* <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          /> */}
        </div>
        <form >
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email"  />
          <textarea
            // className={styles.textArea}
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
