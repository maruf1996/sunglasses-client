import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import google from "../../images/google.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefaulty();
  };
  return (
    <div className="login_container">
      {!isLoading && (
        <div className="card login m-auto py-4 px-5 rounded">
          <h2 className="my-4" style={{ fontSize: "30px", color: "teal" }}>
            Register
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <button
              onClick={signInWithGoogle}
              className="w-100 btn border my-3 py-2 fw-bold text-primary border-primary"
            >
              {" "}
              <img src={google} alt="" className="px-2" /> Continue With Google
            </button>
            <input
              onBlur={handleOnBlur}
              name="name"
              class="form-control form-control-lg my-3"
              type="text"
              placeholder="Name"
              aria-label=".form-control-lg example"
            ></input>
            <input
              onBlur={handleOnBlur}
              name="email"
              class="form-control form-control-lg my-3"
              type="email"
              placeholder="Email"
              aria-label=".form-control-lg example"
            ></input>
            <input
              onBlur={handleOnBlur}
              name="password"
              class="form-control form-control-lg my-3"
              type="password"
              placeholder="Password"
              aria-label=".form-control-lg example"
            ></input>
            <input
              onBlur={handleOnBlur}
              name="password2"
              class="form-control form-control-lg"
              type="password"
              placeholder="Re-Type Your Password"
              aria-label=".form-control-lg example"
            ></input>
            <button
              type="submit"
              className="w-100 btn btn-danger my-4 py-2 fs-5 text-light"
            >
              Register
            </button>
            <p className="fs-5">
              Already have an account ?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </p>
          </form>
          {user?.email && (
            <div class="alert alert-info" role="alert">
              User Created Successfully!
            </div>
          )}
          {authError && (
            <div class="alert alert-danger" role="alert">
              {authError}
            </div>
          )}
        </div>
      )}
      {isLoading && (
        <div class="spinner-border m-auto" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Register;
