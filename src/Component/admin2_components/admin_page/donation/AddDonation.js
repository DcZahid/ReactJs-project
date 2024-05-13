import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddDonation() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const save = () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("details", details);
    formdata.append("photo", photo);

    axios
      .post(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/donation/adddonation.php",
        formdata,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setPhoto("");
        setDetails("");
        navigate("/admin/donationlist");
      });
  };
  return (
    <div>
      <>
        <Admin2_asidebar />
        <div className="content">
          <Admin2_nav />

          <main>
            <div className="card card-body">
              <div>
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1>Add Major Causes</h1>
                  </div>
                  <div class="col-sm-6">
                    <ol
                      class="breadcrumb float-sm-right"
                      style={{ marginLeft: "485px" }}
                    >
                      <li class="breadcrumb-item">
                      <NavLink className="btn" to={`/admin/donationlist`}>
                  <h4 className="btn btn-primary">Donation list</h4>
                </NavLink>
                      </li>
                    </ol>
                  </div>
                </div>
               
                <table className="table table-borderd">
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
                      <th>
                        <button onClick={save} className="btn btn-success">Save</button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </>
    </div>
  );
}
