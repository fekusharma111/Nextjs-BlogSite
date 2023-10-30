import Link from "next/link";
import React from "react";
import styles from "./redirectionButton.module.css";

const RedirectionButton = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default RedirectionButton;
