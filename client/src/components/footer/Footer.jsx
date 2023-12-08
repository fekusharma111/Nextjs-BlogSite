import React from "react";
import  "./footer.css";
import FooterNav from "./FooterNav";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className="footercontainer">
      <NewsLetter />
      <FooterNav />
    </div>
  );
};

export default Footer;
