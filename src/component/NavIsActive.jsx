import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import { Dropdown } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';

export class NavActive extends Component {
  render() {
    return (     
      <div className="side-nav-header">
         <Toaster/>
        <Search></Search>
        <button className="promotion-btn">
          <span className="notification-badge">1</span>
          <Link to="/404">
            <img src="assets/img/chat.png" alt="chat" />
          </Link>
        </button>
        <div className="profile-btn">
        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            <img src="assets/img/home/cust1.png" alt="avatar" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-navbar dropdown-nav">
            <Dropdown.Item href="#">
              <NavLink to="/profile">
                <div className="text-decoration-none text-dark btn border-0">
                  Profile
                </div>
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/login">
                <div
                  onClick={() => {
                    localStorage.removeItem("token");
                    toast.success("LOGOUT SUCCESSFULLY!");
                  }}
                  className="text-decoration-none text-dark btn border-0"
                >
                  Logout
                </div>
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>        
      </div>
    );
  }
}

export default NavActive;
