import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AddBanner() {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [photo, setPhoto] = useState("");
  const [details, setDetails] = useState("");
  const [btn1, setBtn1] = useState("");
  const [btn2, setBtn2] = useState("");
  const navi = useNavigate();
  const save = () => {
    const formdata = new FormData();
    formdata.append("title1", title1);
    formdata.append("title2", title2);
    formdata.append("photo", photo);
    formdata.append("details", details);
    formdata.append("btn1", btn1);
    formdata.append("btn2", btn2);

    axios
      .post(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/banner/addBanner.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTitle1("");
        setPhoto("");
        setDetails("");
        setBtn1("");
        setTitle2("");
        setBtn2("");
        navi("/admin/bannerlist");
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
                  <h1>Add Banner</h1>
                </div>
                <div class="col-sm-6">
                  <ol
                    class="breadcrumb float-sm-right"
                    style={{ marginLeft: "490px" }}
                  >
                    <li class="breadcrumb-item">
                      <NavLink to={`/admin/bannerlist`}>
                        <h4 className="btn btn-primary">Banner List</h4>
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>

              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Title1</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setTitle1(e.target.value)}
                        value={title1}
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
                    <th>Title2</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setTitle2(e.target.value)}
                        value={title2}
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
                    <th>Button1</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setBtn1(e.target.value)}
                        value={btn1}
                      />
                    </td>
                    <th>Button2</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setBtn2(e.target.value)}
                        value={btn2}
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
