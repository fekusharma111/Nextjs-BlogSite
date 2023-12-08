import React from "react";
import "./footer.css";

const NewsLetter = () => {
  return (
    <div className="newslettercontainer">
      <div className="newsLetterHeader">
        <h1>Subscribe to our blog. </h1>
        <p>I post fresh content every week.</p>
      </div>
      <div className="newsLetterBtnBox">
        <input type="email" className="emaiInputnewsletter" placeholder="Email address" />
        <button className="subscribeBtn">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default NewsLetter;
