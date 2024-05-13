import React from "react";
import Footer from "../Component/Footer";
import Becomevolunteer from "../Component/Becomevolunteer";
import Featurecause from "../Component/Featurecause";
import Majorcause from "../Component/Majorcause";
import Headers from "../Component/Headers";

export default function Causes() {
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
              <h2>Causes</h2>
              <p>
                Platea nullam nostra laoreet potenti hendrerit laoreet enim nisl
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* majorcause start  */}
      <Majorcause/>
      {/* majorcause end */}
      {/* featurecause start  */}
      <Featurecause/>
      {/* featurecause end */}
      {/* becomevolunteer start  */}
      <Becomevolunteer/>
      {/* becomevolunteer end */}
      {/* footer start  */}
      <Footer/>
      {/* footer end */}
    </>
  );
}
