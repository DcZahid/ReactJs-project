import React, { useEffect, useState } from "react";
import axios from "axios";
import Donation from "./Includes/Donation";

export default function Majorcause() {
  const [dona, setDona] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/donation/getdonation.php"
      )
      .then((res) => setDona(res.data));
  }, []);
  return (
    <>
      <section className="causes_area">
        <div className="container">
          <div className="main_title">
            <h2>Our major causes</h2>
            <p>
              Creepeth called face upon face yielding midst is after moveth{" "}
            </p>
          </div>
          <div className="row">
            {/* <div className="col-lg-4 col-md-6">
              <div className="single_causes">
                <h4>Give Donation</h4>
                <img src="img/causes/c1.png" alt="" />
                <p>
                  It youre. Was called youre fowl grass lesser land together
                  waters beast darkness earth land whose male all moveth
                  fruitful.
                </p>
              </div>
            </div> */}
            {dona.map((d,i)=><Donation data={d}/>
              )
            }
            
            
            {/* <div className="col-lg-4 col-md-6">
              <div className="single_causes">
                <h4>Give Inspiration</h4>
                <img src="img/causes/c2.png" alt="" />
                <p>
                  It you're. Was called you're fowl grass lesser land together
                  waters beast darkness earth land whose male all moveth
                  fruitful.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_causes">
                <h4>Become Bolunteer</h4>
                <img src="img/causes/c3.png" alt="" />
                <p>
                  It you're. Was called you're fowl grass lesser land together
                  waters beast darkness earth land whose male all moveth
                  fruitful.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
