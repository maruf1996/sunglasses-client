import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useService from "../../Hooks/useService";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const ServicesDetails = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [serviceItem] = useService();
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    const matched = serviceItem.find((service) => service?.id === serviceId);
    setSelectedItem(matched);
  }, [serviceItem, serviceId]);

  const handleServiceBooking = () => {
    alert("Booking Successfully");
  };

  return (
    <div className="">
      <Header></Header>
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card mx-auto rounded p-5">
              <img
                src={selectedItem?.img}
                alt=""
                style={{ width: "250px", padding: "5px" }}
                className="mx-auto my-4"
              />
              <h2 className="text-dark mb-4">{selectedItem?.name}</h2>
              <p className="text-secondary fs-5">
                {selectedItem?.description?.slice(0, 150)}
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-dark text-start my-2">Register Now</h2>
            <div className="card p-4">
              <form className="" onSubmit={handleServiceBooking}>
                <input
                  className="form-control form-control-lg my-2 border border-1 border-dark"
                  placeholder="Name"
                  value={user.displayName}
                  type="text"
                ></input>
                <input
                  className="form-control form-control-lg my-2 border border-1 border-dark"
                  placeholder="Email"
                  value={user.email}
                  type="text"
                ></input>
                <input
                  className="form-control form-control-lg my-2 border border-1 border-dark"
                  placeholder="Address"
                  type="text"
                  required
                ></input>
                <input
                  className="form-control form-control-lg my-2 border border-1 border-dark"
                  placeholder="Phone"
                  type="text"
                  required
                ></input>
                <button className="btn btn-danger form-control form-control-lg my-2 text-light fs-5">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Link to="/explore">
          <button className="mt-5 px-5 py-3 fs-5 border-0 rounded">
            See All Service
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServicesDetails;
