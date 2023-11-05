import React from "react";
import "./ContactAbout.css";

const ContactAbout = () => {
  return (
    <div className="container my-5">
      <div className="contact border border-2 p-4 m-auto">
        <div className="px-3 mb-5 border-bottom">
          <h2 className="fw-bold text-danger">
            Contact <span className="text-teal">us</span>
          </h2>
        </div>
        <div className="text-start">
          <div className="form">
            <div class="mb-3 ">
              <label for="exampleFormControlInput1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Address"
              />
            </div>
            <button className="btn btn-danger fw-bold px-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
