import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../BASE_URL";
import AnimatedPage from "../../AnimatePage";
import Search from "../Search";
import toast, { Toaster } from "react-hot-toast";

export class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product_name: "",
      description: "",
      price: "",
      isFetching: false,
      redirectToReferrer: false,
    };
  }

  handleProductInput = (event) => {
    event.preventDefault();
    const { product_name, price, description } = this.state;
    const body = {
      product_name: product_name,
      price: price,
      description: description,
    };

    const token = localStorage.getItem("token");
    axios
      .post(`${BASE_URL}/products/`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        toast.success("Created Product Successfully!");
        console.log(res);
        this.setState({
          data: res.data.data,
          isFetching: true,
          redirectToReferrer: false,
        });
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          toast.error("Unsuccessfully Created Product!");
          console.log(error);
        }
      });
  };

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
                    <NavLink
                      exact="true"
                      activeclassname="navbar__link--active"
                      className="navbar__link"
                      to="/products"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="mode-switch">
                    <Link to="/payment"> Your Cart </Link>
                  </li>
                  <li className="mode-switch">
                    <Link to="/history"> History </Link>
                  </li>
                  <div className="side-nav-header">
                    <Search></Search>
                    <button className="promotion-btn">
                      <span className="notification-badge">1</span>
                      <a href=" ">
                        <img src="/assets/img/chat.png" alt="chat-img" />
                      </a>
                    </button>
                    <button className="profile-btn">
                      <Link to="/profile">
                        <img
                          src="/assets/img/home/cust1.png"
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
          <Toaster />
          <div className="img-bg-menu-detail"></div>
          <div className="bg-img-detail-menu" style={{ marginTop: "50%" }}>
            <div className="title-header-d-menu">
              <b>Favorite & Promo / Add New Product</b>
            </div>
            <AnimatedPage>
              <form onSubmit={this.handleProductInput}>
                <div className="d-flex flex-row py-5">
                  <div className="col-md-4">
                    <div className="flex-column ">
                      <div className="p-2">
                        <img
                          className="img-profile"
                          src="/assets/img/avatar.png"
                          alt="user"
                        />
                        <label className="btn btn-dark btn-lg btn-block">
                          <input type="file" name="image" hidden />
                          Take a picture
                        </label>
                        <label className="btn btn-primary btn-lg btn-block">
                          <input type="file" name="image" hidden />
                          Choose form gallery
                        </label>
                      </div>
                      <div className="p-2">
                        <div className="input-group">
                          <label>Delivery Hour :</label>
                        </div>
                        <div className="dropdown show">
                          <a
                            className="btn btn-tranparent dropdown-toggle"
                            href=" "
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Select start hour
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" href=" ">
                              Action
                            </a>
                            <a className="dropdown-item" href=" ">
                              Another action
                            </a>
                            <a className="dropdown-item" href=" ">
                              Something else here
                            </a>
                          </div>
                        </div>
                        <div className="dropdown show">
                          <a
                            className="btn btn-tranparent dropdown-toggle"
                            href=" "
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Select end hour
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" href=" ">
                              Action
                            </a>
                            <a className="dropdown-item" href=" ">
                              Another action
                            </a>
                            <a className="dropdown-item" href=" ">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="dropdown show">
                          <a
                            className="btn btn-tranparent dropdown-toggle"
                            href=" "
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Input Stock
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a className="dropdown-item" href=" ">
                              Action
                            </a>
                            <a className="dropdown-item" href=" ">
                              Another action
                            </a>
                            <a className="dropdown-item" href=" ">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-6">
                    <div className="flex-column">
                      <div className="p-2">
                        <div className="input-group">
                          <label>Name :</label>
                          <input
                            name="text"
                            placeholder="Type product name min 50 character"
                            type="text"
                            required={true}
                            value={this.state.product_name}
                            onChange={(event) => {
                              this.setState({
                                product_name: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="input-group">
                          <label>Price :</label>
                          <input
                            name="price"
                            placeholder="Type the price"
                            type="number"
                            required={true}
                           value={this.state.price}
                            onChange={(event) => {
                              this.setState({
                                price: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="input-group">
                          <label>Description :</label>
                          <input
                            name="description"
                            placeholder="Describe your product min 150 character"
                            type="text"
                            required={true}
                            value={this.state.description}
                            onChange={(event) => {
                              this.setState({
                                description: event.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="input-group">
                          <label>Input product size :</label>
                          <h5> CLick size you want to use for this product</h5>
                          <div className="d-flex icon-size-d-menu">
                            <a href=" ">R</a>
                            <a href=" ">L</a>
                            <a href=" ">XL</a>
                            <p href=" ">200gr</p>
                            <p href=" ">340gr</p>
                            <p href=" ">500gr</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <label>Input Delivery Methods </label>
                        <h5> CLick method you want to use for this product</h5>
                        <div className="d-flex col-md-12 icon-delivery-d-menu">
                          <a href=" ">Dine in</a>
                          <a href=" ">Door Delivery</a>
                          <a href=" ">Pick up</a>
                        </div>
                      </div>
                      <div className="p-2">
                        <input type="submit" className="login-button" />

                        <Link
                          to="/404"
                          className="google-submit text-decoration-none"
                        >
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </AnimatedPage>
          </div>
        </main>
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

export default ProductDetail;
