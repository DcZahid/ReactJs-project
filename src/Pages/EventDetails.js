import React from "react";
import Headers from "../Component/Headers";
import Becomevolunteer from "../Component/Becomevolunteer";
import Footer from "../Component/Footer";

export default function EventDetails() {
  return (
    <>
      {/* header start  */}
      <Headers/>
      {/* header end */}
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
              <h2>Events Details</h2>
              <p>
                Platea nullam nostra laoreet potenti hendrerit laoreet enim nisl
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="condition-area event-details-area section_gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="condition-left">
                <img
                  className="img-fluid"
                  src="img/event/event-details.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="condition-right">
                <h2 className="mb-20">
                  Homeless man sues couple who raised for him
                </h2>
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price You may see some for
                  as low as each. If you are looking at blank cassettes on the
                  web, you may be very confused at the difference in price You
                  may see.
                </p>
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price You may see some for
                  as low as each. If you are looking at blank cassettes on the
                  web, you may be very confused at the difference in price You
                  may see.
                </p>
                <ul>
                  <li>Saturday, 15th September, 2018</li>
                  <li>Rocky beach Church</li>
                  <li>Los Angeles, USA.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* becomevolunteer start  */}
      <Becomevolunteer/>
      {/* becomevolunteer end */}
      {/* footer start  */}
      <Footer/>
      {/* footer end */}
    </>
  );
}
