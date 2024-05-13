import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// import '../../public/js/theme.js'
export default function Headers() {
  return (
    <>
      <header className="header_area navbar_fixed">
        <div className="main_menu">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <NavLink to="/" className="navbar-brand logo_h">
                  <img src="img/logo.png" alt="" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div
                  className="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav menu_nav ml-auto">
                    <li className="nav-item active">
                      <NavLink to="/" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/causes" className="nav-link">
                        Causes
                      </NavLink>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <NavLink
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <NavLink
                            to="/events"
                            className="nav-link"
                            href="events.html"
                          >
                            Events
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/eventdetails"
                            className="nav-link"
                            href="event-details.html"
                          >
                            Event Details
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/elements"
                            className="nav-link"
                            href="elements.html"
                          >
                            Elements
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <NavLink
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <NavLink
                            to="/blog"
                            className="nav-link"
                            href="blog.html"
                          >
                            Blog
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/blogdetails"
                            className="nav-link"
                            href="single-blog.html"
                          >
                            Blog Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className="nav-link"
                        href="contact.html"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
