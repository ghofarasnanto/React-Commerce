import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./productstyle.css";
import BASE_URL from "../../BASE_URL";
import AnimatedPage from "../../AnimatePage";
import Search from "../../component/Search";

function ProductDetail() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  // eslint-disable-next-line
  const [isFetching, setIsFetching] = useState(false);

  // setIsFetching(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/${id}`)
      .then((res) => {
        setProductDetails(res.data.data);
        console.log(res);
        setIsFetching(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsFetching(false);
      });
  }, [id]);

  const numberFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

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
                      <img src="/assets/img/home/cust1.png" alt="profile-img" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>
      <main>
        <div className="img-bg-menu-detail"></div>
        <div className="bg-img-detail-menu">
          <div className="title-header-d-menu">
            <b>Favorite & Promo / {productDetails.product_name}</b>
          </div>
          <AnimatedPage>
            <div className="row justify-content-md-center my-3 p-3 bg-white rounded shadow-sm bg-content-d-menu">
              <div className="col-sm-11 aside-input">
                <img
                  className="img-menu-detail"
                  src={`${process.env.REACT_APP_BASE_URL}${productDetails.image}`}
                  alt="img-product"
                />
                <div className="name-header-d-menu">
                  <b>{productDetails.product_name}</b>
                  <h2>{numberFormat(productDetails.price)}</h2>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg btn-block aside-button"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block aside-button"
                >
                  Ask to staff
                </button>
              </div>
              <div className="card-deck card-content-d-menu">
                <div className="card rounded card-d-menu">
                  <p>
                    Delivery only on <b>Monday to Friday</b> at <b>1-7 pm</b>
                  </p>
                  <p>{productDetails.description}</p>
                  <p className="text-center">
                    <b>Choose a size </b>
                  </p>
                  <div className="d-flex icon-size-d-menu">
                    <a href=" ">R</a>
                    <a href=" ">L</a>
                    <a href=" ">XL</a>
                  </div>
                </div>
                <div className="text-center">
                  <p>
                    <b>Choose Delivery Methods </b>
                  </p>
                  <div className="d-flex col-md-12 icon-delivery-d-menu">
                    <a href=" ">Dine in</a>
                    <a href=" ">Door Delivery</a>
                    <a href=" ">Pick up</a>
                  </div>
                </div>
                <label className="set-time">
                  Set time :
                  <input
                    type="text"
                    placeholder="Enter the time will you arrived"
                    title="Set Time"
                    required=""
                    defaultValue={"Enter the time will you arrived"}
                  />
                </label>
              </div>
            </div>
            <div className="card-deck card-content-d-menu">
              <div className="card rounded card-d-menu">
                <div className="d-flex">
                  <div className="col-md-9 card-checkout">
                    <div className="">
                      <a href=" ">
                        <img
                          className="img-menu-detail"
                          src="/assets/img/menu/1.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <h3>Cold Brew</h3>
                      <p>1x(Large)</p>
                      <p>1(Reguler)</p>
                    </div>
                    <div className="px-4">
                      <div className="col-sm-12 mx-auto">
                        <div className="input-group">
                          <span className="input-group-prepend my-5">
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-number"
                              disabled="disabled"
                              data-type="minus"
                              data-field="quant[1]"
                            >
                              <span className="fa fa-minus"></span>
                            </button>
                          </span>
                          <input
                            type="text"
                            name="quant[1]"
                            className="form-control input-number my-5 text-center"
                            value="1"
                            min="1"
                            max="10"
                          />
                          <span className="input-group-append my-5">
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-number"
                              data-type="plus"
                              data-field="quant[1]"
                            >
                              <span className="fa fa-plus"></span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 button-checkout">
                    <div>
                      <Link to="/payment">Chekcout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default ProductDetail;
