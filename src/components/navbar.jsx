import React, { Component } from "react";

//Stateleff Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
