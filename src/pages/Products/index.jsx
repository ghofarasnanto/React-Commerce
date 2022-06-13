import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./products.css";
import BASE_URL from "../../BASE_URL";
import axios from "axios";

import AnimatedPage from "../../AnimatePage";
import Pagination from "../../component/Pagination";
import Product from "../../component/Product";
import Promotion from "../Promotion";
import NavIsActive from "../../component/NavIsActive";
import NavNoActive from "../../component/NavNoActive";

export class Products extends Component {
  constructor() {
    super();
    this.state = {
      productCollection: [],
      productName: "",
      isFetching: false,
      totalPage: 0,
      categoryId: 0,
      orderBy: "",
      sortBy: "",
      isActive: false,
      token: localStorage.getItem("token") || "",
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    axios
      .get(
        `${BASE_URL}/products?limit=12` //sort=ASC&limit=12&category=3&page=2&order=price&page=1&product_name=milk
      )
      .then((res) => {
        this.setState({
          productCollection: res.data.data,
          totalPage: res.data.total_page,
        });
        console.log(res);
        this.setState({ isFetching: false });
      })
      .catch(function (error) {
        console.log(error);
        this.setState({ isFetching: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.categoryId !== this.state.categoryId ||
      prevState.orderBy !== this.state.orderBy ||
      prevState.sortBy !== this.state.sortBy
    ) {
      axios
        .get(
          `${BASE_URL}/products?category=${this.state.categoryId}&order=${this.state.orderBy}&limit=12&sort=${this.state.sortBy}`
        )
        .then((res) => {
          this.setState({
            productCollection: res.data.data,
            totalPage: res.data.total_page,
          });
          console.log(res);
          this.setState({ isFetching: false });
        })
        .catch(function (error) {
          console.log(error);
          this.setState({ isFetching: false });
        });
    }
    // if (prevState.orderBy !== this.state.orderBy || prevState.sortBy !== this.state.sortBy) {
    //   axios
    //     .get(`${BASE_URL}/products?order=${this.state.orderBy}&limit=12&sort=${this.state.sortBy}`)
    //     .then((res) => {
    //       this.setState({
    //         productCollection: res.data.data,
    //         totalPage: res.data.total_page,
    //       });
    //     });
    //   }
    // if (prevState.sortBy !== this.state.sortBy) {
    //   axios
    //     .get(`${BASE_URL}/products?sort=${this.state.sortBy}&limit=12`)
    //     .then((res) => {
    //       this.setState({
    //         productCollection: res.data.data,
    //         totalPage: res.data.total_page,
    //       });
    //     });
    //   }
  }

  filterCategory = (event) => {
    const { id } = event.target;
    console.log(event.target);
    this.setState({
      categoryId: id,
    });
    console.log(id);
  };

  orderBy = (event) => {
    const { id } = event.target;
    console.log(event.target);
    this.setState({
      orderBy: id,
    });
    console.log(id);
  };

  sortBy = (event) => {
    const { id } = event.target;
    console.log(event.target);
    this.setState({
      sortBy: id,
    });
    console.log(id);
  };

  activeClass = () => {
    this.setState({
      isActive: true,
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
                  {this.state.token ? <NavIsActive /> : <NavNoActive />}
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
                    <li                     
                      className="status-type"
                      // className={
                      //   this.activeClass ? "status-type-active" : "status-type"
                      // }
                      id={3}
                      onClick={this.filterCategory}
                    >
                      Favorite & Promo
                    </li>
                  </div>
                  <div className=" item-status">
                    <li                      
                      className="status-type"
                      id={2}
                      onClick={this.filterCategory}
                    >
                      Coffee
                    </li>
                  </div>
                  <div className="item-status ">
                    <li
                      className="status-type"
                      id={5}
                      onClick={this.filterCategory}
                    >
                      Non Coffee
                    </li>
                  </div>
                  <div className="item-status ">
                    <li
                      className="status-type "
                      id={1}
                      onClick={this.filterCategory}
                    >
                      Foods
                    </li>
                  </div>
                  <div className="item-status ">
                    <li className="status-type " onClick={this.filterCategory}>
                      All Products
                    </li>
                  </div>
                </div>
              </div>
              <section className="d-flex justify-content-end col-md-12 px-2 ">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Order by
                  </button>
                  <div className="dropdown-menu">
                    {/* eslint-disable-next-line */}
                    <a
                      className="dropdown-item"
                      href="#"
                      id="price"
                      onClick={this.orderBy}
                    >
                      Price
                    </a>
                    {/* eslint-disable-next-line */}
                    {/* <a className="dropdown-item" href="#" id="transaction" onClick={this.orderBy}>
                      Transaction
                    </a> */}
                    {/* eslint-disable-next-line */}
                    <a
                      className="dropdown-item"
                      href="#"
                      id="updated_at"
                      onClick={this.orderBy}
                    >
                      New Item
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
                    {/* eslint-disable-next-line */}
                    <a
                      className="dropdown-item"
                      href="#"
                      id="ASC"
                      onClick={this.sortBy}
                    >
                      Ascending
                    </a>
                    {/* eslint-disable-next-line */}
                    <a
                      className="dropdown-item"
                      href="#"
                      id="DESC"
                      onClick={this.sortBy}
                    >
                      Descending
                    </a>
                  </div>
                </div>
              </section>
              <AnimatedPage>
                <Product
                  products={this.state.productCollection}
                  loading={this.state.loading}
                ></Product>
              </AnimatedPage>
              <p>* the price has been cutted by discount appears</p>
              <Pagination totalPage={this.state.totalPage}></Pagination>
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
                <AnimatedPage>
                  <Promotion></Promotion>
                </AnimatedPage>
                <br />
                <Link to="/404" className="login-button apply-coupon">
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
  }
}

export default Products;
