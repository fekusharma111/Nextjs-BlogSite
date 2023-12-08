import React from "react";
import  "./navbar.css";
import Link from "next/link";
import { NavItem } from "@/utils/constants";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar w/ text
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {NavItem.map((item) => (
            <li className="nav-item" key={item.id}>
              <Link className="nav-link active" href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
       
        </ul>
       
      </div>
    </div>
  </nav>
//     <div className="navcontainer">
// <div className="innercontainer">
// <div className="navsection">
//       <div className="navlogo">LAYER MATRIX</div>
//       <div className="navItem">
//         <ul>
//           {NavItem.map((item) => (
//             <li key={item.id}>
//               <Link href={item.url} className="link">
//                 {item.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       </div>
//       </div>
//     </div>
  );
};

export default Navbar;
