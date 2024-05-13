import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row section_gap">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets" style={{color:"white"}}>
                  <h4 className="footer_title large_title">Our Mission</h4>
                  <p>
                    So seed seed green that winged cattle in. Gathering thing
                    made fly you're no divided deep moved us lan Gathering thing
                    us land years living.
                  </p>
                  <p>
                    So seed seed green that winged cattle in. Gathering thing
                    made fly you're no divided deep moved
                  </p>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                  <h4 className="footer_title">Quick Links</h4>
                  <ul className="list">
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                      <NavLink to='/causes'>Causes</NavLink>
                    </li>
                    <li>
                      <NavLink to='/events'>Event</NavLink>
                    </li>
                    <li>
                      <NavLink to='/blogdetails'>News</NavLink>
                    </li>
                    <li>
                      <NavLink to='/contact' >Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget instafeed">
                  <h4 className="footer_title">Gallery</h4>
                  <ul className="list instafeed d-flex flex-wrap">
                    <li>
                      <img src="img/gallery/g1.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/gallery/g2.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/gallery/g3.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/gallery/g4.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/gallery/g5.jpg" alt="" />
                    </li>
                    <li>
                      <img src="img/gallery/g6.jpg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                  <h4 className="footer_title">Contact Us</h4>
                  <div className="ml-40">
                    <p className="sm-head">
                      <span className="fa fa-location-arrow" />
                      Head Office
                    </p>
                    <p>123, Main Street, Your City</p>
                    <p className="sm-head">
                      <span className="fa fa-phone" />
                      Phone Number
                    </p>
                    <p>
                      +123 456 7890 <br />
                      +123 456 7890
                    </p>
                    <p className="sm-head">
                      <span className="fa fa-envelope" />
                      Email
                    </p>
                    <p>
                      <a
                        href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="7315011616331a1d151c160b121e031f165d101c1e"
                      >
                        [email&nbsp;protected]
                      </a>{" "}
                      <br />
                      www.infoexample.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row d-flex">
              <p className="col-lg-12 footer-text text-center">
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com/" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
