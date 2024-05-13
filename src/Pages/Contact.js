import React from "react";
import Footer from "../Component/Footer";
import Questions from "../Component/Questions";
import Headers from "../Component/Headers";

export default function Contact() {
  return (
    <>
      {/* headers start  */}
      <Headers/>
      {/* headers end */}
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div
            className="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset={0}
            data-background=""
          />
          <div className="container">
            <div className="banner_content text-center">
              <h2>Contact Us</h2>
              <p>
                Platea nullam nostra laoreet potenti hendrerit laoreet enim nisl
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_area section_gap">
        <div className="container">
          <div
            id="mapBox"
            className="mapBox"
            data-lat="40.701083"
            data-lon="-74.1522848"
            data-zoom={13}
            data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
            data-mlat="40.701083"
            data-mlon="-74.1522848"
          ></div>
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home" />
                  <h6>California, United States</h6>
                  <p>Santa monica bullevard</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset" />
                  <h6>
                    <a href="#">00 (440) 9865 562</a>
                  </h6>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope" />
                  <h6>
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="e99a9c9999869b9da98a8685869b85808bc78a8684"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </h6>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <form
                className="row contact_form"
                action="https://preview.colorlib.com/theme/seelife/contact_process.php"
                method="post"
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows={1}
                      placeholder="Enter Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <button
                    type="submit"
                    value="submit"
                    className="btn primary_btn"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* questions start  */}
      <Questions/>
      {/* questions end */}
      {/* footer start  */}
      <Footer/>
      {/* footer end */}
      <div id="success" className="modal modal-message fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa fa-close" />
              </button>
              <h2>Thank you</h2>
              <p>Your message is successfully sent...</p>
            </div>
          </div>
        </div>
      </div>
      <div id="error" className="modal modal-message fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa fa-close" />
              </button>
              <h2>Sorry !</h2>
              <p> Something went wrong </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
