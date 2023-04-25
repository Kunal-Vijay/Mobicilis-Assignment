import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Mobicilis
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/condition1">
                Condition 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/condition2">
                Condition 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/condition3">
                Condition 3
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/condition4">
                Condition 4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/condition5">
                Condition 5
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
