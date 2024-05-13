import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateDonation() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://localhost/Reactjs/31-01-24/seelife/backend/crud/donation/editdonation.php?id=${id}`
      )
      .then((res) => {
        setTitle(res.data.title);
        setDetails(res.data.details);
      });
  }, []);
  const save = () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("details", details);
    formdata.append("photo", photo);
    formdata.append("id", id);
    axios
      .post(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/donation/updatedonation.php",
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
        navigate("/admin/donationlist");
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
                      <div>
                        <img
                          height={100}
                          src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${photo}`}
                        />
                      </div>
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
  );
}
