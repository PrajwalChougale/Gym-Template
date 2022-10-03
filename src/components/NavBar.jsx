import React from "react";

export default function navBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-brown p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Get Fit with Mohan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item pr-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown pr-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Training
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Weight Loss
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Weight Gain
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Strength Training
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item pr-3">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item pr-3">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
