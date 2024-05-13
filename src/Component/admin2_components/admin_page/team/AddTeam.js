import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddTeam() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const save = () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("designation", designation);
    formdata.append("details", details);
    formdata.append("photo", photo);

    axios
      .post(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/team/addteam.php",
        formdata,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setName("");
        setPhoto("");
        setDetails("");
        navigate("/admin/teamlist");
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
                  <h1>Add Team</h1>
                </div>
                <div class="col-sm-6">
                  <ol
                    class="breadcrumb float-sm-right"
                    style={{ marginLeft: "490px" }}
                  >
                    <li class="breadcrumb-item">
                      <NavLink className="btn" to={`/admin/teamlist`}>
                        <h1 className="btn btn-primary">Team list</h1>
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>

              <table className="table table-borderd">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
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
                    <th>Designation</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setDesignation(e.target.value)}
                        value={designation}
                      />
                    </td>
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
