import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export class NavActive extends Component {
  render() {
    return (
      <div className="side-nav-header">
        <Search></Search>
        <div className="d-flex nav-side-home">
          <div className="p-4 center-header">
            <Link to="/login" className="btn btn-link" role="button">
              Login
            </Link>
          </div>
          <div className="p-4 center-header">
            <Link to="/signup" className="btn btn-primary" role="button">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavActive;
