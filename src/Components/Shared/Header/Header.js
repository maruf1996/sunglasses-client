import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        className="py-2"
        style={{ background: "#e5e5e5" }}
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link
              className="fs-1 text-decoration-none"
              style={{ fontFamily: "'Courgette', cursive", color: "red" }}
              to="/"
            >
              Sunglass House
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto nav_menu fs-6">
              <NavLink
                style={{
                  color: "red",
                  fontWeight: 500,
                  textDecoration: "none",
                  margin: "5px 20px",
                }}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                style={{
                  color: "red",
                  fontWeight: 500,
                  textDecoration: "none",
                  margin: "5px 20px",
                }}
                to="/explore"
              >
                Explore
              </NavLink>
              <NavLink
                style={{
                  color: "red",
                  fontWeight: 500,
                  textDecoration: "none",
                  margin: "5px 20px",
                }}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                style={{
                  color: "red",
                  fontWeight: 500,
                  textDecoration: "none",
                  margin: "5px 20px",
                }}
                to="/contact"
              >
                Contact
              </NavLink>
              {user?.email && (
                <NavLink
                  style={{
                    color: "red",
                    fontWeight: 500,
                    textDecoration: "none",
                    margin: "5px 20px",
                  }}
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
            </Nav>
            {user?.email ? (
              <>
                <h5 className="text-teal my-3 mx-2">
                  Welcome! {user.displayName}
                </h5>
                <button
                  onClick={logOut}
                  className="btn btn-danger px-4 mt-1 fw-bold btn-outline-light"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-danger px-4 mt-1 fw-bold btn-outline-light">
                  Login
                </button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
