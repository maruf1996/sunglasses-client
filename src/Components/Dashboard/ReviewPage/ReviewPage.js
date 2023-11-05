import React from "react";
import useAuth from "../../../Hooks/useAuth";

const ReviewPage = () => {
  const { user } = useAuth();
  const name = user?.displayName;
  const email = user?.email;

  return (
    <div className="text-start ms-lg-4">
      <h2 className="text-center" style={{ marginTop: "80px" }}>
        Your Review Form
      </h2>
      <div className="row mt-3">
        <div className="col-lg-6 px-5">
          <form action="">
            <input
              type="text"
              class="form-control form-control-lg my-3 border-danger"
              placeholder="Name"
              value={name}
            />
            <input
              type="email"
              class="form-control form-control-lg my-3 border-danger"
              placeholder="Email"
              value={email}
            />
            <input
              type="text"
              class="form-control form-control-lg my-3 border-danger"
              placeholder="Your Company"
            />
            <input
              type="text"
              class="form-control form-control-lg my-3 border-danger"
              placeholder="Rating"
            />
            <textarea
              className="w-100 my-2 border-danger"
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Description"
            ></textarea>
            <br />
            <button className="py-2 w-100 mb-3 rounded btn btn-danger text-light fs-5">
              Add Your Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
