import React from "react";
import Headers from "../Component/Headers";
import Upcomingevents from "../Component/Upcomingevents";
import Questions from "../Component/Questions";
import Footer from "../Component/Footer";

export default function Events() {
  return (
    <>
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
                <h2>Events</h2>
                <p>
                  Platea nullam nostra laoreet potenti hendrerit laoreet enim
                  nisl
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* upcomingevents start  */}
        <Upcomingevents/>
        {/* upcomingevents end */}
        {/* question start  */}
        <Questions/>
        {/* question end */}
        {/* footer start  */}
        <Footer/>
        {/* footer end */}
      </>
    </>
  );
}
