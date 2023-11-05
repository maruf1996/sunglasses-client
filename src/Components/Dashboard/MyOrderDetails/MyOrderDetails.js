import React from "react";

const MyOrderDetails = (props) => {
  const { img, name } = props.service;

  const handleCancelBtn = () => {
    alert("Your Order Cancelled");
  };
  return (
    <div className="col-md-3">
      <div className="mx-2 shadow-lg mb-4 p-3 bg-body rounded">
        <img
          src={img}
          alt=""
          className="rounded img-fluid py-4"
          style={{ width: "200px", height: "150px" }}
        />
        <div className="text-start">
          <h6 className="mb-4">{name}</h6>
          <button
            onClick={handleCancelBtn}
            style={{
              background: "#ee2c2c",
              border: "white",
              padding: "12px",
              color: "white",
              fontWeight: "500",
              borderRadius: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrderDetails;
