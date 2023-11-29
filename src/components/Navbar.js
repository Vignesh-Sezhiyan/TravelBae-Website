import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./main.css";

function Navbar() {
  return (
    <div className="Home-nav">
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          {/* <i class="fa-brands fa-vimeo-v ms-5"></i> */}

          <Link to="/">
            <h2 className="mt-2 ms-4 heading ">TravelBae !</h2>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-lg-0 text-center">
              <li class="nav-item me-4 p-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li class="nav-item me-4 p-2">
                <NavLink to="/destinations">Destinations</NavLink>
              </li>
              <li class="nav-item me-4 p-2">
                <NavLink to="/report">Report</NavLink>
              </li>
              <li class="nav-item me-4 p-2">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
