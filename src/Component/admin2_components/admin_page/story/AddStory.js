import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddStory() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [company, setCompany] = useState("");
    const [photo, setPhoto] = useState("");
    const navigate = useNavigate();
    const save = () => {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("date", date);
      formdata.append("company", company);
      formdata.append("photo", photo);
  
      axios
        .post(
          "http://localhost/Reactjs/31-01-24/seelife/backend/crud/story/addStory.php",
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
          setCompany("");
          setDate("");
          navigate("/admin/StoryList");
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
                  <h1>Add Story</h1>
                </div>
                <div class="col-sm-6">
                  <ol
                    class="breadcrumb float-sm-right"
                    style={{ marginLeft: "490px" }}
                  >
                    <li class="breadcrumb-item">
                    <NavLink className="btn" to={`/admin/storylist`}>
                <h1 className="btn btn-primary">Story list</h1>
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
                    <th>Company</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setCompany(e.target.value)}
                        value={company}
                      />
                    </td>
                    <th>Date</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                      />
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
  );
}
