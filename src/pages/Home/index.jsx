import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import AnimatedPage from "../../AnimatePage";
import './Home.css'
import NavIsActive from "../../component/NavIsActive";
import NavNoActive from "../../component/NavNoActive";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      token: localStorage.getItem("token") || "",
    };
  }
  render() {
    return (
      <React.Fragment>        
        <nav>
          <header className="navbar navbar-expand-lg navbar-light bg-light app-header">
            <div className="container-fluid">
              <div className="app-header-left">
                <span className="app-icon">
                  <img src="assets/img/home/logo.png" alt="app-icon" />
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
                    <NavLink
                      exact="true"
                      activeclassname="navbar__link--active"
                      className="navbar__link"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="mode-switch">
                    <Link to="/products"> Product </Link>
                  </li>
                  <li className="mode-switch">
                    <Link to="/payment"> Your Cart </Link>
                  </li>
                  <li className="mode-switch">
                    <Link to="/history"> History </Link>
                  </li>
                  {this.state.token ? <NavIsActive /> : <NavNoActive />}
                </div>
              </div>
            </div>
          </header>
        </nav>
        <AnimatedPage>
        <main>
          <div className="bg-home jumbotron">
            <div className="text-left text-white">
              <h1>
                Start Your Day with
                <br /> Coffee and Good Meals
              </h1>
              <p>
                We provide high quality beans, good taste, and healthy
                <br /> meals made by love just for you. Start your day with us
                <br /> for a bigger smile!
              </p>
              <button type="button" className="btn btn-light">
                Get Started
              </button>
            </div>
          </div>
          <section>
            <div className="card rounded text-black bg-white mb-5 d-flex flex-row col-md-10 mx-auto card-header">
              <div className="row my-3 p-3 col-md-12 text-center">
                <div className="col">
                  <a href=" " className="icon-card-header">
                    <i className="fa fa-user"></i>
                  </a>
                  <div className="card-title">
                    <h5>90+</h5>
                    <p>Staff</p>
                  </div>
                </div>
                <div className="col vertical-line">
                  <a href=" " className="icon-card-header">
                    <i className="fa fa-map-marker"></i>
                  </a>
                  <div className="card-title">
                    <h5>30+</h5>
                    <p>Stores</p>
                  </div>
                </div>
                <div className="col vertical-line">
                  <a href=" " className="icon-card-header">
                    <i className="fa fa-heart-o"></i>
                  </a>
                  <div className="card-title">
                    <h5>300+</h5>
                    <p className="card-text">Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row row-team">
              <div className="col-6">
                <img src="/assets/img/home/2.png" alt="img-team" />
              </div>
              <div className="col-6">
                <div className="text-team">
                  <h1>
                    Start Your Day with
                    <br /> Coffee and Good Meals
                  </h1>
                  <p>
                    We provide high quality beans, good taste, and healthy
                    <br /> meals made by love just for you. Start your day with
                    us
                    <br /> for a bigger smile!
                  </p>
                  <ul className="fa-ul">
                    <li>
                      <i className="fa-li fa fa-check-circle"></i>High quality
                      beans
                    </li>
                    <li>
                      <i className="fa-li fa fa-check-circle"></i>Healty meals,
                      you can request the ingredients
                    </li>
                    <li>
                      <i className="fa-li fa fa-check-circle"></i>Chat our staff
                      to get better expericence for ordering
                    </li>
                    <li>
                      <i className="fa-li fa fa-check-circle"></i>Free member
                      card with a minimum purchase of IDR 200.000.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="intro">
              <h2 className="text-center">Here is People Favorite</h2>
              <p className="text-center">
                Let's choose and have a bit tasts of people's favorite. It might
                be yours too!
              </p>
            </div>

            <div className="card-deck card-menus">
              <div className="card rounded card-round">
                <img
                  className="card-img-top rounded-circle img-card"
                  src="./assets/img/home/product1.png"
                  alt="img-card"
                />
                <div className="card-body c-body">
                  <h5 className="text-center">Hazelnut Latte</h5>
                  <div className="card-text">
                    <ul className="fa-ul">
                      <li>
                        <i className="fa-li fa fa-check"></i>HazelnutSyrup
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Vanilla Wheapped
                        Cream
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Ice / Hot
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Sliced Banana on
                        Top
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer c-footer">
                  <small className="text-muted t-muted">IDR 35.000</small>
                </div>
                <div className="p-2 p-btn">
                  <button type="button" className="btn order-btn">
                    Order Now
                  </button>
                </div>
              </div>

              <div className="card rounded card-round">
                <img
                  className="card-img-top rounded-circle img-card"
                  src="assets/img/home/product2.png"
                  alt="img-card"
                />
                <div className="card-body c-body">
                  <h5 className="text-center">Pinky Promis</h5>
                  <div className="card-text">
                    <ul className="fa-ul">
                      <li>
                        <i className="fa-li fa fa-check"></i>HazelnutSyrup
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Vanilla Wheapped
                        Cream
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Ice / Hot
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Sliced Banana on
                        Top
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer c-footer">
                  <small className="text-muted t-muted">IDR 55.000</small>
                </div>
                <div className="p-2 p-btn">
                  <button type="button" className="btn order-btn">
                    Order Now
                  </button>
                </div>
              </div>

              <div className="card rounded card-round">
                <img
                  className="card-img-top rounded-circle img-card"
                  src="assets/img/home/product3.png"
                  alt="img-card"
                />
                <div className="card-body c-body">
                  <h5 className="text-center">Chicken Wings</h5>
                  <div className="card-text">
                    <ul className="fa-ul">
                      <li>
                        <i className="fa-li fa fa-check"></i>HazelnutSyrup
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Vanilla Wheapped
                        Cream
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Ice / Hot
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>Sliced Banana on
                        Top
                      </li>
                      <li>
                        <i className="fa-li fa fa-check"></i>on TopSliced Banana{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer c-footer">
                  <small className="text-muted t-muted">IDR 25.000</small>
                </div>
                <div className="p-2 p-btn">
                  <button type="button" className="btn order-btn">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="intro">
              <h2 className="text-center">
                Visit Our Store in the
                <br /> Spot on the Map Below
              </h2>
              <p className="text-center">
                See our story city on the spot and spen you good day there. See
                <br /> you soon!
              </p>
            </div>
            <div className="maps-img">
              <img src="/assets/img/home/maps1.png" alt="img-maps" />
            </div>
          </section>
          <section>
            <h2 className="text-center mb-4">Our Partner</h2>
            <div className="d-flex flex-partner">
              <img
                className="col"
                src="assets/img/home/netflix.png"
                alt="..."
              />
              <img
                className="col"
                src="assets/img/home/netflix.png"
                alt="..."
              />
              <img
                className="col"
                src="assets/img/home/netflix.png"
                alt="..."
              />
              <img
                className="col"
                src="assets/img/home/netflix.png"
                alt="..."
              />
              <img
                className="col"
                src="assets/img/home/netflix.png"
                alt="..."
              />
            </div>
          </section>
          <section>
            <div className="intro">
              <h2 className="text-center">
                Love by Thousand of <br /> Happy Customer
              </h2>
              <p className="text-center">
                There are stories of our customers who have visited us with
                great
                <br /> pleasure
              </p>
            </div>

            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row card-box">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="message-box">
                            <img
                              src="assets/img/home/cust1.png"
                              alt="profile"
                            />
                            <div className="message-content">
                              <div className="message-header">
                                <div className="name">
                                  Viexh Robert
                                  <p className="message-line">Warsaw, Poland</p>
                                </div>
                                <div className="star-checkbox">
                                  4.5
                                  <label htmlFor="star-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="#FFBA33"
                                    >
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                  </label>
                                </div>
                              </div>
                              <p className="message-line">
                                offer and meals tho, I like it here! Very
                                recommended
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="message-box">
                            <img
                              src="assets/img/home/cust2.png"
                              alt="profile"
                            />
                            <div className="message-content">
                              <div className="message-header">
                                <div className="name">
                                  Viexh Robert
                                  <p className="message-line">Warsaw, Poland</p>
                                </div>
                                <div className="star-checkbox">
                                  4.5
                                  <label htmlFor="star-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="#FFBA33"
                                    >
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                  </label>
                                </div>
                              </div>
                              <p className="message-line">
                                Im very happy to spend my whole day here. the
                                Wi-fi is good, and the coffe and meals tho, I
                                like it here! Very recommended
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="message-box">
                            <img
                              src="assets/img/home/cust3.png"
                              alt="profile"
                            />
                            <div className="message-content">
                              <div className="message-header">
                                <div className="name">
                                  Viexh Robert
                                  <p className="message-line">Warsaw, Poland</p>
                                </div>
                                <div className="star-checkbox">
                                  4.5
                                  <label htmlFor="star-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="#FFBA33"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-star"
                                    >
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                  </label>
                                </div>
                              </div>
                              <p className="message-line">
                                Wow... Im very happy to spend my whole day here.
                                the Wi-fi is good, and the coffe
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-11 text-right">
              <a
                className="btn mb-3 mr-1 rounded-circle btn-carousel"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a
                className="btn mb-3 rounded-circle btn-carousel"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </section>
          <section>
            <div className="card rounded text-black bg-white mt-5 d-flex flex-row col-md-10 mx-auto card-header">
              <div className="row p-4 col-md-12">
                <div className="col">
                  <h1 className="text-check-promo">
                    Check our promo
                    <br /> today
                  </h1>
                  <p>Let's see the deals and pick yours</p>
                </div>
                <div className="col btn-cards footer-button">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    See Promo
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
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

export default Home;
