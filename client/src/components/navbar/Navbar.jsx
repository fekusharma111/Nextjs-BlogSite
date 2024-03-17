import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { NavItem } from "@/utils/constants";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  theme-bgcolor fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand text-white fw-semibold">
          LAYER MATRIX
        </Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-lg-auto">
            {NavItem.map((item) => (
              <li key={item.id} className="nav-item">
                <Link href={item.url} className="nav-link text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
