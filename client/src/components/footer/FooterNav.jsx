import React from "react";
import  "./footer.css";
import { FooterNavPageLinks } from "@/utils/constants";
import Link from "next/link";

const FooterNav = () => {
  return (
    <div className="footerNavContainer">
      <div className="footerNavItem">
        <div className="footerLinks">
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
        </div>
        <div className="footerLinks">
          {FooterNavPageLinks.map((item) => (
            <Link href={item.link} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer_bottom">
   
        <div className="container">
        <div className="footerbottomNavItem">
        <div>©2023 Layer Matrix. All rights reserved.</div>
        <div className="social">
          {/* <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Facebook Account" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Instagram Account" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Twitter Account" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Youtube Account" /> */}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
