import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const NavItem = [
    {
      id: "home",
      title: "Home",
      url: "/",
    },
    {
      id: "blog",
      title: "Blog",
      url: "/blogs",
    },
    {
      id: "categories",
      title: "Categories",
      url: "/categories",
    },
    {
      id: "about",
      title: "About",
      url: "/about-us",
    },
    {
      id: "contact",
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>LAYER MATRIX</div>
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
