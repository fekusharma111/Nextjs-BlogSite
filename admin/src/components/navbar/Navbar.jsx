import React from "react";
import { MdOutlineNotifications, MdAccountCircle, MdSearch } from "react-icons/md";
import { adminNavLinks } from "../../constants/data";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light boxshadow ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <MdSearch />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {adminNavLinks.map((link) => {
              if (link.visible) {
                if (link.dropDown) {
                  return (
                    <li className="nav-item dropdown" key={link.id}>
                      <a
                        className="nav-link"
                        href="#"
                        id={link.id}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {link.title}
                      </a>
                      <div className="dropdown-menu" aria-labelledby={link.id}>
                        {link.dropDown.map((subLink) => {
                          if (subLink.visible) {
                            return (
                              <a className="dropdown-item" href="#" key={subLink.id}>
                                {subLink.title}
                              </a>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li className="nav-item" key={link.id}>
                      <a className="nav-link" href="#">
                        {link.title}
                      </a>
                    </li>
                  );
                }
              }
              return null;
            })}

            <li className="nav-item">
              <a className="nav-link" href="#">
                <MdOutlineNotifications />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <MdAccountCircle />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
