import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="" style={{ background: "#e5e5e5" }}>
      <div className="row py-4 mx-4 mt-4">
        <div className="col-md-4 text-start mb-4">
          <div className="">
            <h4 className=" mb-3" style={{ color: "black" }}>
              Address
            </h4>
            <p className=" fs-6" style={{ color: "black" }}>
              H#000 (0th Floor), Road #00, New DOHS, <br />
              Mohakhali, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <div className="col-md-4 text-start mb-4">
          <div className="row">
            <div className="col-md-6 mb-3">
              <h4 className=" mb-3" style={{ color: "black" }}>
                Company
              </h4>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">About</p>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Project</p>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Our Team</p>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Team Condition</p>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Submit Listing</p>
              </Link>
            </div>
            <div className="col-md-6 mb-3">
              <h4 className=" mb-3" style={{ color: "black" }}>
                Quick Links
              </h4>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Quick Links</p>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Rentals</p>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Sales</p>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Contact</p>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <p className="">Our blog</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-start mb-3">
          <div className="">
            <h4 className="" style={{ color: "black" }}>
              About us
            </h4>
            <p className=" fs-6" style={{ color: "black" }}>
              consectetur adipiscing elit. Purus commodo ipsum duis laoreet
              maecenas.
            </p>
          </div>
        </div>
        <div className="text-start text-black text-bolder border-top py-2 border-2">
          <p>Copyright © by || maruf billah 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
