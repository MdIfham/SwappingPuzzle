import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link
            to="/"
            style={{
              fontFamily: "monospace"
            }}
            className="col s5 brand-logo center red-text"
          >
            <i className="material-icons">apps</i>
            <span>Swapping <span style={{color:"#0099ff"}}>Puzzle</span></span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar