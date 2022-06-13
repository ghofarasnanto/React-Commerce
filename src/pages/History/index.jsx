import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import AnimatedPage from "../../AnimatePage";
import Search from "../../component/Search";

export class Profile extends Component {
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
                    <Link to="/payment"> Your Cart </Link>
                  </li>
                  <li className="mode-switch">
                    <NavLink
                      exact="true"
                      activeclassname="navbar__link--active"
                      className="navbar__link"
                      to="/products"
                    >
                      History
                    </NavLink>
                  </li>
                  <div className="side-nav-header">
                    <Search></Search>
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

        <main>
          <img
            className="img-bg-payment"
            src="assets/img/background.png"
            alt="coffe-bg"
          />

          <div className="card-deck card-content-d-menu">
            <div className="card rounded card-d-payment">
              <div className="title-header text-center">
                <b>Lets see what you have bought!</b>
                <p>Select item to delete </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="col-md-2 title-header">
                  <h4>
                    <u>Delete</u>
                  </h4>
                </div>
              </div>
              <AnimatedPage>
                <div className="d-flex">
                  <div className="col-md-4 card-checkout d-flex flex-column px-4">
                    <div className="">
                      <div className="media align-items-stretch">
                        <div className="align-self-center">
                          <i className="font-large-2 mr-2">
                            <img
                              className="rounded-circle"
                              src="/assets/img/menu/1.png"
                              alt=""
                            />
                          </i>
                        </div>
                        <div className="media-body my-2">
                          <h2>Cold Brew</h2>
                          <h5>IDR 50.000</h5>
                          <h5>Delivered</h5>
                        </div>
                        {/* Default unchecked */}
                        <div className="custom-control custom-checkbox custom-control-inline d-flex align-items-end mt-auto p-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="defaultInline1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="defaultInline1"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-1"></div>
                  <div className="col-md-4 card-checkout d-flex flex-column px-4">
                    <div className="">
                      <div className="media align-items-stretch">
                        <div className="align-self-center">
                          <i className="font-large-2 mr-2">
                            <img
                              className="rounded-circle"
                              src="/assets/img/menu/1.png"
                              alt=""
                            />
                          </i>
                        </div>
                        <div className="media-body my-2">
                          <h2>Cold Brew</h2>
                          <h5>IDR 50.000</h5>
                          <h5>Delivered</h5>
                        </div>
                        {/* Default unchecked */}
                        <div className="custom-control custom-checkbox custom-control-inline d-flex align-items-end mt-auto p-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="defaultInline2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="defaultInline2"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-1"></div>
                  <div className="col-md-4 card-checkout d-flex flex-column px-4">
                    <div className="">
                      <div className="media align-items-stretch">
                        <div className="align-self-center">
                          <i className="font-large-2 mr-2">
                            <img
                              className="rounded-circle"
                              src="/assets/img/menu/1.png"
                              alt=""
                            />
                          </i>
                        </div>
                        <div className="media-body my-2">
                          <h2>Cold Brew</h2>
                          <h5>IDR 50.000</h5>
                          <h5>Delivered</h5>
                        </div>
                        {/* Default unchecked */}
                        <div className="custom-control custom-checkbox custom-control-inline d-flex align-items-end mt-auto p-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="defaultInline3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="defaultInline3"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedPage>
            </div>
          </div>
        </main>

        <footer>
          <div className="page-content-footer">
            <div className="main-footer all-footer adm-footer">
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
