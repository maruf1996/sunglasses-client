import React from "react";
import updates1 from "../../../images/homeUpdate/supdate1.jpg";
import updates2 from "../../../images/homeUpdate/supdate2.jpg";
import updates3 from "../../../images/homeUpdate/supdate3.jpg";

const UpdateDersign = () => {
  return (
    <div className="container">
      <h2 className="fw-bold" style={{ fontSize: "50px", color: "teal" }}>
        Stay Update Sunglasses
      </h2>

      <div className="row my-5">
        <div className="col-md-4">
          <div className="card">
            <img
              src={updates1}
              className="card-img-top img-fluid p-3"
              alt="..."
            />
            <div className="card-body">
              <div className="text-start">
                <h5 className="card-title fs-3">
                  Including animation in your design system
                </h5>
                <p className="card-text fs-5 my-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-outline border border-4 my-2 btn-lg"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src={updates2}
              className="card-img-top img-fluid p-3"
              alt="..."
            />
            <div className="card-body">
              <div className="text-start">
                <h5 className="card-title fs-3">
                  Including animation in your design system
                </h5>
                <p className="card-text fs-5 my-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-outline border border-4 my-2 btn-lg"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src={updates3}
              className="card-img-top img-fluid p-3"
              alt="..."
            />
            <div className="card-body">
              <div className="text-start">
                <h5 className="card-title fs-3">
                  Including animation in your design system
                </h5>
                <p className="card-text fs-5 my-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-outline border border-4 my-2 btn-lg"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDersign;
