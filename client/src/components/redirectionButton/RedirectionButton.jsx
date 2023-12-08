import Link from "next/link";
import React from "react";
import  "./redirectionButton.css";

const RedirectionButton = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="redirectionbuttoncontainer">{text}</button>
    </Link>
  );
};

export default RedirectionButton;
