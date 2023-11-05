import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AddProduct from "./AddProduct/AddProduct";
import AllProduct from "./AllProduct/AllProduct";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import MyOrder from "./MyOrder/MyOrder";
import PayPage from "./PayPage/PayPage";
import ReviewPage from "./ReviewPage/ReviewPage";

const Dashboard = () => {
  const { logOut } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <div className="dashboard">
      <div style={{ background: "#e5e5e5", color: "teal" }}>
        <div className="container-fluid">
          <p className=" m-auto fs-2 fw-bolder py-3">Dashboard</p>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-3"
          style={{
            height: "85vh",
            padding: "10px",
            display: "block",
            backgroundColor: "#e5e5e5",
          }}
        >
          <Navbar expand="lg" className="">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="p-3 d-block text-lg-start">
                  <div className="">
                    <i class="fas fa-cart-plus me-2"></i>
                    <Link
                      to={`${url}/myorder`}
                      style={{
                        color: "red",
                        textDecoration: "none",
                        fontSize: "20px",
                      }}
                    >
                      My Order
                    </Link>{" "}
                    <br />
                    <i class="fas fa-text-width me-2"></i>
                    <Link
                      to={`${url}/reviewpage`}
                      style={{
                        color: "red",
                        textDecoration: "none",
                        fontSize: "20px",
                      }}
                    >
                      Review
                    </Link>{" "}
                    <br />
                    <i class="fab fa-amazon-pay me-2"></i>
                    <Link
                      to={`${url}/paypage`}
                      style={{
                        color: "red",
                        textDecoration: "none",
                        fontSize: "20px",
                      }}
                    >
                      Pay
                    </Link>{" "}
                    <br />
                  </div>

                  <div>
                    <i class="fas fa-user-plus me-2"></i>
                    <Link
                      to={`${url}/makeadmin`}
                      style={{
                        color: "red",
                        textDecoration: "none",
                        fontSize: "20px",
                      }}
                    >
                      Make Admin
                    </Link>{" "}
                    <br />
                    <i class="fas fa-plus-square me-2"></i>
                    <Link
                      to={`${url}/addproduct`}
                      style={{
                        color: "red",
                        textDecoration: "none",
                        fontSize: "20px",
                      }}
                    >
                      Add Product
                    </Link>{" "}
                    <br />
                    <i class="fas fa-cart-plus me-2"></i>
                    <Link
                      to={`${url}/allorder`}
                      style={{
                        color: "red",
                        textDecoration: "none",
                        fontSize: "20px",
                      }}
                    >
                      All Order
                    </Link>{" "}
                    <br />
                  </div>
                  <button
                    onClick={logOut}
                    className="btn btn-danger px-4 mt-5 fw-bold mb-3"
                  >
                    Logout
                  </button>
                  <br />
                  <Link
                    to="/"
                    style={{
                      color: "red",
                      textDecoration: "none",
                      fontSize: "20px",
                    }}
                  >
                    Go to Home
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="col-lg-9">
          <Switch>
            <Route path={`${path}/myorder`}>
              <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/reviewpage`}>
              <ReviewPage></ReviewPage>
            </Route>
            <Route path={`${path}/paypage`}>
              <PayPage></PayPage>
            </Route>
            <Route path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/allorder`}>
              <AllProduct></AllProduct>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
