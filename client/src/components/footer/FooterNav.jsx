import React from "react";
import styles from "./footer.module.css";
import { FooterNavPageLinks } from "@/utils/constants";
import Link from "next/link";

const FooterNav = () => {
  return (
    <div className={styles.footerNavContainer}>
      <div className={styles.footerNavItem}>
        <div className={styles.footerLinks}>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
        </div>
        <div className={styles.footerLinks}>
          {FooterNavPageLinks.map((item) => (
            <Link href={item.link} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.footerNavItem}>
        <div>©2023 Layer Matrix. All rights reserved.</div>
        <div className={styles.social}>
          {/* <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Facebook Account" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Instagram Account" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Twitter Account" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Youtube Account" /> */}
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
