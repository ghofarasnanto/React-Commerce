import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./products.css";
// import BASE_URL from "../../BASE_URL";
// import axios from "axios";
import { connect } from "react-redux";

import AnimatedPage from "../../AnimatePage";
import Pagination from "../../component/Pagination";
import Product from "../../component/Product";
import Promotion from "../Promotion";
import NavIsActive from "../../component/NavIsActive";
import NavNoActive from "../../component/NavNoActive";
import withSearchParams from "../../helper/withSearchParams";
import { loadProgressBar } from "x-axios-progress-bar";

import { getAllProductsRedux } from "../../redux/actionType/products";

export class Products extends Component {
  constructor() {
    super();
    this.state = {
      // productCollection: [],
      // productName: "",
      // isFetching: false,
      // totalPage: 0,
      // categoryId: 0,
      // orderBy: "",
      // sortBy: "",
      // nextLink: null,
      // prevLink: null,
      // currentPage: 0,
      token: localStorage.getItem("token") || "",
      role: localStorage.getItem("role"),
    };
  }

  componentDidMount() {    
    const { searchParams, dispatch } = this.props;
    dispatch(
      getAllProductsRedux(
        searchParams.get("product_name") || "",
        searchParams.get("category") || "",
        searchParams.get("order") || "created_at",
        searchParams.get("sort") || "asc"
      )
    );
  }
  componentDidUpdate(prevProps) {
    const { searchParams, dispatch } = this.props;
    if (prevProps.searchParams !== searchParams) {
      dispatch(
        getAllProductsRedux(
          searchParams.get("product_name") || "",
          searchParams.get("category") || "",
          searchParams.get("order") || "created_at",
          searchParams.get("sort") || "asc",
          searchParams.get("page") || "1"
        )
      );
    }
  }

  handlePagination = (event, page) => {
    event.preventDefault();
    const { searchParams, setSearchParams } = this.props;
    const category = searchParams.get("category") || "";
    const product_name = searchParams.get("product_name") || "";
    const order = searchParams.get("order") || "created_at";
    const sort = searchParams.get("sort") || "asc";
    setSearchParams({ product_name, category, order, sort, page });
    window.scrollTo(0, 0);
  };

  // componentDidMount() {
  //   this.setState({ isFetching: true });
  //   axios
  //     .get(
  //       `${BASE_URL}/products?limit=12` //sort=ASC&limit=12&category=3&page=2&order=price&page=1&product_name=milk
  //     )
  //     .then((res) => {
  //       this.setState({
  //         productCollection: res.data.data,
  //         totalPage: res.data.total_page,
  //       });
  //       console.log(res);
  //       this.setState({ isFetching: false });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       this.setState({ isFetching: false });
  //     });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.categoryId !== this.state.categoryId ||
  //     prevState.orderBy !== this.state.orderBy ||
  //     prevState.sortBy !== this.state.sortBy
  //   ) {
  //     axios
  //       .get(
  //         `${BASE_URL}/products?category=${this.state.categoryId}&order=${this.state.orderBy}&limit=12&sort=${this.state.sortBy}`
  //       )
  //       .then((res) => {
  //         this.setState({
  //           productCollection: res.data.data,
  //           totalPage: res.data.total_page,
  //         });
  //         console.log(res);
  //         this.setState({ isFetching: false });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         this.setState({ isFetching: false });
  //       });
  //   }
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
  // }

  // filterCategory = (event) => {
  //   const { id } = event.target;
  //   console.log(event.target);
  //   this.setState({
  //     categoryId: id,
  //   });
  //   console.log(id);
  // };

  // orderBy = (event) => {
  //   const { id } = event.target;
  //   console.log(event.target);
  //   this.setState({
  //     orderBy: id,
  //   });
  //   console.log(id);
  // };

  // sortBy = (event) => {
  //   const { id } = event.target;
  //   console.log(event.target);
  //   this.setState({
  //     sortBy: id,
  //   });
  //   console.log(id);
  // };

  // activeClass = () => {
  //   this.setState({
  //     isActive: false,
  //   });
  // };

  render() {
    const { searchParams, products } = this.props;
    const category = searchParams.get("category");
    const product_name = searchParams.get("product_name") || "";
    const order = searchParams.get("order") || "created_at";
    const sort = searchParams.get("sort") || "asc";
    const page = searchParams.get("page") || "1";
    console.log(this.props);

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
                  {this.state.token ? (
                    <NavIsActive
                      category={category}
                      product_name={product_name}
                      order={order}
                      sort={sort}
                      page={page}
                    />
                  ) : (
                    <NavNoActive />
                  )}
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
                    <Link
                      className={`${
                        searchParams.get("category") === "3"
                          ? "status-type-active"
                          : "status-type"
                      }`}
                      to="/products?category=3&order=created_at&sort=asc&page=1"
                    >
                      Favorite & Promo
                    </Link>
                  </div>
                  <div className=" item-status">
                    <Link
                      className={`${
                        searchParams.get("category") === "2"
                          ? "status-type-active"
                          : "status-type"
                      }`}
                      to="/products?category=2&order=created_at&sort=asc&page=1"
                    >
                      Coffee
                    </Link>
                  </div>
                  <div className="item-status ">
                    <Link
                      className={`${
                        searchParams.get("category") === "5"
                          ? "status-type-active"
                          : "status-type"
                      }`}
                      to="/products?category=5&order=created_at&sort=asc&page=1"
                    >
                      Non Coffee
                    </Link>
                  </div>
                  <div className="item-status ">
                    <Link
                      className={`${
                        searchParams.get("category") === "1"
                          ? "status-type-active"
                          : "status-type"
                      }`}
                      to="/products?category=1&order=created_at&sort=asc&page=1"
                    >
                      Foods
                    </Link>
                  </div>
                  <div className="item-status">
                    <Link
                      className={`${
                        searchParams.get("category") === null
                          ? "status-type-active"
                          : "status-type"
                      }`}
                      to="/products"
                    >
                      All Products
                    </Link>
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
                    <Link
                      className="dropdown-item"
                      to={`/products?${
                        category ? "category=" + category + "&" : ""
                      }${
                        product_name ? "product_name=" + product_name + "&" : ""
                      }order=price&sort=asc&page=1`}
                    >
                      Price
                    </Link>
                    {/* eslint-disable-next-line */}
                    {/* <a className="dropdown-item" href="#" id="transaction" onClick={this.orderBy}>
                      Transaction
                    </a> */}
                    {/* eslint-disable-next-line */}
                    <Link
                      className="dropdown-item"
                      to={`/products?${
                        category ? "category=" + category + "&" : ""
                      }${
                        product_name ? "product_name=" + product_name + "&" : ""
                      }order=created_at&sort=asc&page=1`}
                    >
                      New Item
                    </Link>
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
                    <Link
                      className="dropdown-item"
                      to={`/products?${
                        category ? "category=" + category + "&" : ""
                      }${
                        product_name ? "product_name=" + product_name + "&" : ""
                      }order=${order}&sort=asc&page=1`}
                    >
                      Ascending
                    </Link>
                    {/* eslint-disable-next-line */}
                    <Link
                      className="dropdown-item"
                      to={`/products?${
                        category ? "category=" + category + "&" : ""
                      }${
                        product_name ? "product_name=" + product_name + "&" : ""
                      }order=${order}&sort=desc&page=1`}
                    >
                      Descending
                    </Link>
                  </div>
                </div>
              </section>
              <AnimatedPage>
                <div className="menu-boxes GridView">
                  {this.props.err && this.props.err.code && (
                    <div className="container my-5">
                      <div
                        className="alert alert-warning"
                        role="alert"
                        style={{ height: "26vh" }}
                      >
                        <h2>
                          Pencarian kata kunci "{product_name}" gagal. Silahkan
                          coba lagi
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
                  {products.map((product) => {
                    return (
                      <Product
                        key={product.id}
                        id={product.id}
                        image={`${process.env.REACT_APP_BASE_URL}${product.image}`}
                        title={product.product_name}
                        price={`${product.price}`}
                      />
                    );
                  })}
                </div>
              </AnimatedPage>
              <p>* the price has been cutted by discount appears</p>
              <Pagination
                currentPage={this.props.currentPage}
                totalPage={this.props.totalPage}
                paginate={this.handlePagination}
              ></Pagination>
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
            {this.state.role !== "admin" ? (
              <></>
            ) : (
              <div className="btn btn-primary btn-lg btn-block aside-button">
                <button className="btn btn-choco">Edit Promo</button>
                <button className="btn btn-choco">Create Promo</button>
              </div>
            )}
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

const mapStateToProps = (state) => {
  const {
    products: { products, newItems, totalPage, currentPage, err },
  } = state;
  return {
    products,
    newItems,
    totalPage,
    currentPage,
    err,
  };
};

export default connect(mapStateToProps)(withSearchParams(Products));
