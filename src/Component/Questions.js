import React from "react";

export default function Questions() {
  return (
    <>
      <div className="container">
        <div className="subscribe_area">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex align-items-center">
                <h1 className="text-white" style={{paddingLeft:"100px"}}>Do you have a question?</h1>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                    method="get"
                    className="subscribe_form relative"
                  >
                    <div className="input-group d-flex flex-row">
                      <input
                        name="EMAIL"
                        placeholder="Your email address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Email Address '"
                        required=""
                        type="email"
                      />
                      <button className="ml-10 primary_btn yellow_btn btn sub-btn rounded">
                        SUBSCRIBE
                      </button>
                    </div>
                    {/* <div className="info" /> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
