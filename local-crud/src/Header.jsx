import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 d-flex flex-wrap">
              <p className="d-flex me-4 mb-0">
                <i className="bi-person custom-icon me-2" />
                <strong className="text-dark">
                  Welcome to Music Festival 2023
                </strong>
              </p>
            </div>
          </div>
        </div>
      </header>
      <nav
        className="navbar navbar-expand-lg bg-dark "
        style={{ position: "sticky", top: "-1px" }}
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Festava Live
          </a>
          <a
            href="ticket.html"
            className="btn custom-btn d-lg-none ms-auto me-4"
          >
            Buy Ticket
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link click-scroll"
                  href="#section_2"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("section_2");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link click-scroll"
                  href="#section_3"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("section_3");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Artists
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link click-scroll"
                  href="#section_4"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("section_4");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link click-scroll"
                  href="#section_5"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("section_5");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link click-scroll"
                  href="#section_6"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("section_6");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
            <Link to="/ticket" className="btn custom-btn d-lg-block d-none">
              Buy Ticket
                      </Link>
                      <Link to='/userlog'>
            <i className="bi-person custom-icon me-2 py-1 m-2 px-2 bg-light rounded-circle" /></Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
