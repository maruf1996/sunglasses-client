import React from "react";
import aboutimg from "../../../images/aboutSunglasses.webp";

const HomeAbout = () => {
  return (
    <div className="container">
      <div style={{ marginTop: "90px", marginBottom: "80px" }} className="row">
        <div className="col-md-5 mt-3">
          <img
            src={aboutimg}
            alt=""
            className="img-fluid border border-danger border-5 p-4 rounded"
          />
        </div>
        <div className="col-md-7 my-4 text-start">
          <h2 className="fs-1 fw-bolder mb-3">What is Sunglasses?</h2>
          <p style={{ color: "gray", fontSize: "18px" }}>
            Originally designed for U.S. aviators in 1937, Ray-Ban RB3025
            Aviator sunglasses have quickly become one of the most iconic
            sunglasses models in the world. These perfect Ray-Ban Aviators for
            women and men are a timeless model that combines great aviator
            styling with exceptional quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
