import React from "react";
import Headers from "../Component/Headers";
import Volunteer from "../Component/Volunteer";
import Team from "../Component/Team";
import Becomevolunteer from "../Component/Becomevolunteer";
import Footer from "../Component/Footer";

export default function About() {
  return (
    <>
      {/* header start  */}
      <Headers />
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
              <h2>About Us</h2>
              <p>
                Platea nullam nostra laoreet potenti hendrerit laoreet enim nisl
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* volunteer start  */}
      <Volunteer />
      {/* volunteer end */}
      {/* team start  */}
      <Team />
      {/* team end */}
      {/* becomevolunteer start */}
      <Becomevolunteer/>
      {/* becomevolunteer end */}
      {/* footer start  */}
      <Footer/>
      {/* footer end */}
    </>
  );
}
