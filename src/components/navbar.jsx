import React, { Component } from "react";

//Stateleff Functional Component
const NavBar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};


export default NavBar;
