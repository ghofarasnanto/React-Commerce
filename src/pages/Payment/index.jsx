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
                    <NavLink
                      exact="true"
                      activeclassname="navbar__link--active"
                      className="navbar__link"
                      to="/products"
                    >
                      Your Cart
                    </NavLink>
                  </li>
                  <li className="mode-switch">
                    <Link to="/history"> History </Link>
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
              <div className="title-header">
                <b>Checkout Your Item Now!</b>
              </div>
              <AnimatedPage>
                <div className="d-flex">
                  <div className="col-md-5 card-checkout d-flex flex-column px-4">
                    <div className="col-xl-12 col-md-12">
                      <h1>
                        <b>Order Summary</b>
                      </h1>
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
                        <div className="media-body mx-5 py-5">
                          <h5>Cold Brew</h5>
                          <h4>x1</h4>
                          <h4>Regular</h4>
                        </div>
                        <div className="align-self-center">
                          <h4>84,695</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-12">
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
                        <div className="media-body mx-5 py-5">
                          <h5>Cold Brew</h5>
                          <h4>x1</h4>
                          <h4>Regular</h4>
                        </div>
                        <div className="align-self-center">
                          <h4>84,695</h4>
                        </div>
                      </div>
                    </div>
                    <hr className="mx-5" />
                    <div className="d-flex flex-row text-center">
                      <h5 className="text-left col-md-6">SUBTOTAL</h5>
                      <h4 className="col-md-6">184,695</h4>
                    </div>
                    <div className="d-flex flex-row text-center">
                      <h5 className=" text-left col-md-6">TAX & FEES</h5>
                      <h4 className="col-md-6">11,695</h4>
                    </div>
                    <div className="d-flex flex-row text-center">
                      <h5 className="text-left  col-md-6">SHIPPING</h5>
                      <h4 className="col-md-6">10,695</h4>
                    </div>
                    <br />
                    <div className="d-flex flex-row text-center">
                      <h2 className="text-left col-md-6">TOTAL</h2>
                      <h2 className="col-md-6">11,695</h2>
                    </div>
                    <div className="align-self-center"></div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5 ">
                    <div className="d-flex flex-row title-header justify-content-between">
                      <h3>
                        <b>Address Detail</b>
                      </h3>
                      <h4>edit</h4>
                    </div>
                    <div className="d-flex flex-column text-left card-checkout px-3 my-3">
                      <div className="text-left ">
                        <h4>
                          <b>Delivery</b> to Iskandar Street
                        </h4>
                      </div>
                      <hr className="mx-1" />
                      <h4>
                        km 5refinery road oppasity road , effrun , Jakarta
                      </h4>
                      <hr className="mx-1" />
                      <h4> +62 9732764844</h4>
                    </div>

                    <div className="d-flex flex-row title-header">
                      <h3>
                        <b>Payment Method</b>
                      </h3>
                    </div>
                    <div className="d-flex flex-column text-left card-checkout px-3 my-3">
                      <div className="text-left ">
                      <div className="form-check d-flex flex-row">
                          <input
                            type="radio"
                            className="form-check-input p-2"
                            id="radio1"
                            name="optradio"
                            value="option1"
                            checked
                          />
                           <label className="form-check-label" htmlFor="radio2">                        
                        <div className="card-icon p-2">        
                        <i className="fa fa-credit-card-alt"></i>  
                            </div>                            
                        </label>
                        <h4 className="p-2"> Card</h4>
                        </div>
                      </div>
                      <hr className="mx-1" />
                      <div className="form-check d-flex flex-row">
                        <input
                          type="radio"
                          className="form-check-input p-2"
                          id="radio2"
                          name="optradio"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="radio2">                        
                        <div className="bank-icon p-2">        
                        <i className="fa fa-university"></i>  
                            </div>                            
                        </label>
                        <h4 className="p-2">Bank Account</h4>
                      </div>
                      <hr className="mx-1" />
                      <div className="form-check d-flex flex-row">
                        <input
                          type="radio"
                          className="form-check-input p-2"
                          id="radio2"
                          name="optradio"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="radio2">                        
                        <div className="cod-icon p-2">        
                        <i className="fa fa-truck"></i>
                            </div>                            
                        </label>
                        <h4 className="p-2">Cash on Delivery</h4>
                      </div>
                    </div>
                    <Link to="/404" className="login-button">
                      Confirm and Pay
                    </Link>
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
