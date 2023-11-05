import React, { useEffect, useState } from "react";
import ExploreService from "../ExploreService/ExploreService";

const ExploreServices = () => {
  const [exploreServices, exploreSetServices] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => exploreSetServices(data));
  }, []);
  return (
    <div className="container">
      <h2
        className="my-5 fw-bolder"
        style={{ fontSize: "48px", color: "teal" }}
      >
        Explore Page
      </h2>
      <div className="my-4">
        <div className="row">
          {exploreServices.map((service) => (
            <ExploreService key={service.id} service={service}></ExploreService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
