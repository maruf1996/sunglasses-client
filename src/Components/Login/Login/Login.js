import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import google from "../../../images/google.png";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, authError, loginUser, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <div className="login_container">
      <div className="card login m-auto py-4 px-5 rounded-lg">
        <h2 className="my-4" style={{ fontSize: "30px", color: "teal" }}>
          Login
        </h2>
        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            <button
              onClick={handleGoogleSignIn}
              className="w-100 btn border my-3 py-2 fw-bold text-primary border-primary"
            >
              {" "}
              <img src={google} alt="" className="px-2" /> Continue With Google
            </button>
            <input
              name="email"
              onChange={handleOnChange}
              class="form-control form-control-lg my-3"
              type="email"
              placeholder="Email"
              aria-label=".form-control-lg example"
            ></input>
            <input
              name="password"
              onChange={handleOnChange}
              class="form-control form-control-lg"
              type="password"
              placeholder="Password"
              aria-label=".form-control-lg example"
            ></input>
            <button
              type="submit"
              className="w-100 btn btn-danger my-4 py-2 fs-5 text-light"
            >
              Login
            </button>
            <p className="fs-5">
              Don’t have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                Create an account
              </Link>
            </p>
          </form>
        )}
        {user?.email && (
          <div class="alert alert-info" role="alert">
            User Login Successfully!
          </div>
        )}
        {authError && (
          <div class="alert alert-danger" role="alert">
            {authError}
          </div>
        )}
        {isLoading && (
          <div class="spinner-border m-auto" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
