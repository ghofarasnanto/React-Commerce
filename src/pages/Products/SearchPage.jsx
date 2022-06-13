import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../BASE_URL";
import "./products.css";

import Search from "../../component/Search";
import Pagination from "../../component/Pagination";
import AnimatedPage from "../../AnimatePage";
import Promotion from "../Promotion";

const SearchPage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const search = urlParams.get("product_name");
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line
  const [isFetching, setIsFetching] = useState(false);

  // setIsFetching(true);

  console.log(search);

  /*const filterProducts = () => {
    fetch(`${BASE_URL}?title=${search}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }*/

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products?product_name=${search}&limit=12`)
      .then((res) => {
        setProducts(res.data.data);
        console.log(res);
        setIsFetching(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsFetching(false);
      });
  }, [search]);

  console.log(products);
  console.log(!products.length);

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
                    <img src="assets/img/chat.png" alt="chat" />
                  </button>
                  <button className="profile-btn">
                    <Link to="/profile">
                      <img src="assets/img/home/cust1.png" alt="profile-img" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>
      <main className="app-container">
        <div className="app-content">
          <div className="menu-section">
            <div className="menu-section-line">
              <div className="menu-status dropdown-content">
                <div className="item-status">
                  <li className="status-type-active">Favorite & Promo</li>
                </div>
                <div className=" item-status ">
                  <li className="status-type ">Coffee</li>
                </div>
                <div className="item-status ">
                  <li className="status-type ">Non Coffee</li>
                </div>
                <div className="item-status ">
                  <li className="status-type ">Foods</li>
                </div>
                <div className="item-status ">
                  <li className="status-type ">
                  <NavLink
                    exact="true"
                    activeclassname="navbar__link--active"
                    className="navbar__link"
                    to="/products"
                  >
                  All Products
                  </NavLink>
                  </li>
                </div>
              </div>
            </div>
            <section className="d-flex justify-content-end col-md-12 px-2">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Order by
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href=" ">
                    Ascending
                  </a>
                  <a className="dropdown-item" href=" ">
                    Descending
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Sort by
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href=" ">
                    Price
                  </a>
                  <a className="dropdown-item" href=" ">
                    Transaction
                  </a>
                  <a className="dropdown-item" href=" ">
                    New Item
                  </a>
                </div>
              </div>
            </section>
            <AnimatedPage>
            <div className="menu-boxes GridView">              
              {!products.length && search !== 0 && (
                <div className="container my-5">
                  <div
                    className="alert alert-warning"
                    role="alert"
                    style={{ height: "19vh" }}
                  >
                    <h2>
                      Pencarian kata kunci "{search}" gagal. Silahkan coba lagi
                    </h2>
                    <p className="fw-bolder fst-italic">
                      Kata Kunci: Nasi, Coffe dsb.{" "}
                    </p>
                    <p>
                      Kami bukan toko peralatan, kami penyedia makanan dan
                      minuman :)
                    </p>
                  </div>
                </div>
              )}
              {products
                ? products.map((product) => (
                    <div key={product.id} className="menu-box-wrapper box-text">
                      <Link to={`/products/${product.id}`}>
                        <div className="menu-box">
                          <div className="menu-box-header ">
                            <div className="menu-images ">
                              <img
                                src={`http://localhost:8080${product.image}`}
                                alt="product "
                              />
                            </div>
                          </div>
                          <div className="menu-box-content-header">
                            <p className="box-content-header">
                              {product.product_name}
                            </p>
                            <p className="box-content-subheader">
                            {numberFormat(product.price)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                : null}
            </div>
            <Pagination></Pagination>
            </AnimatedPage>
          </div>
          
          <nav aria-label="Page navigation example"></nav>
          <div className="promotion-section ">
            <div className="menu-section-header ">
              <p>Promo Today</p>
              <span>
                Coupons will be updated every weeks
                <br />
                Check them out!
              </span>
            </div>

            <div className="promotion ">
              <Promotion></Promotion>
              <br />
              <Link to="/signup" className="login-button apply-coupon">
                  Apply Coupon
                </Link>
            </div>
            <ul>
              <b>Terms and Condition</b>
              <li>1. You can only apply 1 coupon per day</li>
              <li>2. It only for dine in</li>
              <li>3. Buy 1 get 1 only for new user</li>
              <li>4. Should make member card to apply coupon</li>
            </ul>
          </div>
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
};
export default SearchPage;
