import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { NavItem } from "@/utils/constants";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        LAYER MATRIX
      </Link>
      <div className={styles.navItem}>
        <ul>
          {NavItem.map((item) => (
            <li key={item.id}>
              <Link href={item.url} className={styles.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
