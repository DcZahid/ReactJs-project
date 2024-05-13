import React, { useEffect, useState } from "react";
import TeamMan from "./Includes/TeamMan";
import axios from "axios";

export default function Team() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/team/getteam.php"
      )
      .then((res) => setTeam(res.data));
  }, []);
  return (
    <>
      <section className="team_area section_gap">
        <div className="container">
          <div className="main_title">
            <h2>Meet our voluteer</h2>
            <p>
              Creepeth called face upon face yielding midst is after moveth{" "}
            </p>
          </div>
          <div className="row team_inner">
          {team.map((d,i)=><TeamMan data={d}/>
              )
            }
            {/* <TeamMan />
            <TeamMan />
            <TeamMan />
            <TeamMan /> */}
            {/* <div className="col-lg-3 col-md-6">
              <div className="team_item">
                <div className="team_img">
                  <img className="img-fluid" src="img/voluteer/v1.jpg" alt="" />
                </div>
                <div className="team_name">
                  <h4>Alea Mirslava</h4>
                  <p>Party Manager</p>
                  <p className="mt-20">
                    So seed seed green that winged cattle in kath moved us land
                    years living.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="active">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6">
              <div className="team_item">
                <div className="team_img">
                  <img className="img-fluid" src="img/voluteer/v2.jpg" alt="" />
                </div>
                <div className="team_name">
                  <h4>Adam Virland</h4>
                  <p>Party Manager</p>
                  <p className="mt-20">
                    So seed seed green that winged cattle in kath moved us land
                    years living.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="active">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6">
              <div className="team_item">
                <div className="team_img">
                  <img className="img-fluid" src="img/voluteer/v3.jpg" alt="" />
                </div>
                <div className="team_name">
                  <h4>Adam Virland</h4>
                  <p>Party Manager</p>
                  <p className="mt-20">
                    So seed seed green that winged cattle in kath moved us land
                    years living.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="active">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-6">
              <div className="team_item">
                <div className="team_img">
                  <img className="img-fluid" src="img/voluteer/v4.jpg" alt="" />
                </div>
                <div className="team_name">
                  <h4>Adam Virland</h4>
                  <p>Party Manager</p>
                  <p className="mt-20">
                    So seed seed green that winged cattle in kath moved us land
                    years living.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="active">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope-o" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
