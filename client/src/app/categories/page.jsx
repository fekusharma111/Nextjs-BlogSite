import React from "react";
import styles from "./page.module.css";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>Featured Categories</h2>
        <div className={styles.itemContainer}>
          <div>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatibus possimus quos libero obcaecati magni.</p>
          </div>
          <div>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatibus possimus quos libero obcaecati magni.</p>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <h2>All Categories</h2>
        <div className={styles.itemContainer}>
          <div>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatibus possimus quos libero obcaecati magni.</p>
          </div>
          <div>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatibus possimus quos libero obcaecati magni.</p>
          </div>
          <div>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatibus possimus quos libero obcaecati magni.</p>
          </div>
          <div>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatibus possimus quos libero obcaecati magni.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
