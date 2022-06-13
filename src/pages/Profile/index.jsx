import React, { Component } from "react";
import { Link } from "react-router-dom";
import GetProfile from "../../component/GetProfile";
import AnimatedPage from "../../AnimatePage";
import BASE_URL from "../../BASE_URL";
import axios from "axios";
import jwt_decode from "jwt-decode";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isFetching: false,
      redirectToReferrer: false,
      token: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    // console.log(token);
    const decoded = jwt_decode(token);
    axios
      .get(`${BASE_URL}/users/${decoded.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          items: res.data.data,
          isFetching: true,
          redirectToReferrer: false,
        });
      })
      .catch(function (error) {
        if (token === null) {
          return error;
        }
        console.log(error);
        // window.location.href = "/";
      });
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <header className="navbar navbar-expand-lg navbar-light bg-light app-header">
            <div className="container-fluid">
              <div className="app-header-left">
                <span className="app-icon">
                  <img src="/assets/img/home/logo.png" alt="app-icon" />
                </span>
                <p className="app-name">Coffee Shop</p>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse app-header-right"
                id="navbarNav"
              >
                <div className="navbar-nav ms-auto">
                  <li className="mode-switch">
                    <Link to="/"> Home</Link>
                  </li>
                  <li className="mode-switch">
                    <Link to="/products"> Product </Link>
                  </li>
                  <li className="mode-switch">
                    <Link to="/"> Your Cart </Link>
                  </li>
                  <li className="mode-switch">
                    <Link to="/"> History </Link>
                  </li>
                  <div className="side-nav-header">
                    <div className="search-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="feather feather-search"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                      </svg>
                      <input
                        className="search-input"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                    <button className="promotion-btn">
                      <span className="notification-badge">1</span>
                      <a href=" ">
                        <img src="assets/img/chat.png" alt="chat-img" />
                      </a>
                    </button>
                    <button className="profile-btn">
                      <Link to="/profile">
                        <img
                          src="assets/img/home/cust1.png"
                          alt="profile-img"
                        />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </nav>       
        <AnimatedPage>
          <GetProfile
            profile={this.state.items}
            loading={this.state.loading}
          ></GetProfile>
        </AnimatedPage>
        <footer>
          <div className="page-content-footer">
            <div className="main-footer all-footer">
              <div className="footer-left">
                <div className="main-footer-title">
                  <img
                    src="/assets/img/home/logo.png"
                    alt="logo"
                    className="logo"
                  />
                  <p>Coffee Shop</p>
                </div>
                <div className="footer-company-about">
                  <span>
                    Coffee Shop is a store that sells some good meals, and
                    especially coffee. We provide high quality beans.
                  </span>
                  <div className="footer-icons">
                    <a href=" ">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href=" ">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href=" ">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <p className="footer-company-name">©2020 CoffeeStore</p>
                </div>
              </div>
              <div className="footer-right">
                <p>Products</p>
                <p className="footer-links">
                  <a href=" ">Download</a>
                  <a href=" ">Pricing</a>
                  <a href=" ">Location</a>
                  <a href=" ">Countries</a>
                  <a href=" ">Blog</a>
                </p>
                <br />
                <p>Engage</p>
                <p className="footer-links">
                  <a href=" ">Coffee Shop ?</a>
                  <a href=" ">About Us</a>
                  <a href=" ">FAQ</a>
                  <a href=" ">Privacy Policy</a>
                  <a href=" ">Terms of Service</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Profile;
