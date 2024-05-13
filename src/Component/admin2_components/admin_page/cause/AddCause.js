import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddCause() {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [details, setDetails] = useState("");
  const [btn, setBtn] = useState("");
  const [raised, setRaised] = useState("");
  const [goal, setGoal] = useState("");
  const [donors, setDonors] = useState("");
  const navi = useNavigate();
  const save = () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("photo", photo);
    formdata.append("details", details);
    formdata.append("btn", btn);
    formdata.append("raised", raised);
    formdata.append("goal", goal);
    formdata.append("donors", donors);

    axios
      .post(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/cause/addCause.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setPhoto("");
        setDetails("");
        setBtn("");
        setRaised("");
        setGoal("");
        setDonors("");
        navi("/admin/cause");
      });
  };
  return (
    <>
      <Admin2_asidebar />
      <div className="content">
        <Admin2_nav />

        <main>
          <div className="card card-body">
            <div>
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Add Featured Causes</h1>
                </div>
                <div class="col-sm-6">
                  <ol
                    class="breadcrumb float-sm-right"
                    style={{ marginLeft: "490px" }}
                  >
                    <li class="breadcrumb-item">
                      <NavLink to={`/admin/cause`}>
                        <h4 className="btn btn-primary">Cause List</h4>
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>
              
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Title</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </td>
                    <th>Photo</th>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setPhoto(e.target.files[0])}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Details</th>
                    <td>
                      <textarea
                        className="form-control"
                        onChange={(e) => setDetails(e.target.value)}
                        value={details}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <th>Button</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setBtn(e.target.value)}
                        value={btn}
                      />
                    </td>
                    <th>Raised</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setRaised(e.target.value)}
                        value={raised}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Goal</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setGoal(e.target.value)}
                        value={goal}
                      />
                    </td>
                    <th>Donors</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setDonors(e.target.value)}
                        value={donors}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <button onClick={save} className="btn btn-success">
                        Save
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
