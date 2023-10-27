import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const NavItem = [
    {
      id: "home",
      name: "Home",
      link: "/",
    },
    {
      id: "blog",
      name: "Blog",
      link: "/blog",
    },
    {
      id: "categories",
      name: "Categories",
      link: "/categories",
    },
    {
      id: "about",
      name: "About",
      link: "/about",
    },
    {
      id: "contact",
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>LAYER MATRIX</div>
      <div className={styles.navItem}>
        <ul>
          {NavItem.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
