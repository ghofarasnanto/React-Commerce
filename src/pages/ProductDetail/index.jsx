// import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import "./productstyle.css";
// import BASE_URL from "../../BASE_URL";
import AnimatedPage from "../../AnimatePage";
import { connect } from "react-redux";
import { getProductDetail } from "../../utils/axios";
import Search from "../../component/Search";

import {
  increment,
  decrement,
  setDelivery,
  setIdProduct,
  setImage,
  setName,
  setSize,
  setTime,
  setPrice,
  setCheckOut,
} from "../../redux/actionType/cart";

import withParams from "../../helper/withParams";

// function ProductDetail() {
//   const { id } = useParams();
//   const [productDetails, setProductDetails] = useState({});
//   // eslint-disable-next-line
//   const [isFetching, setIsFetching] = useState(false);

//   // setIsFetching(true);

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/products/${id}`)
//       .then((res) => {
//         setProductDetails(res.data.data);
//         console.log(res);
//         setIsFetching(false);
//       })
//       .catch(function (error) {
//         console.log(error);
//         setIsFetching(false);
//       });
//   }, [id]);
export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isCheckOut: false,
      successMsg: "",
      errorMsg: "",
      token: localStorage.getItem("token") || "",
      products: {
        productDetails: [],
      },
      cart: {
        qty: 0,
      },
    };
  }

  getProductDetailPage = (id) => {
    getProductDetail(id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          products: { ...this.state.products, productDetails: res.data.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  cartHandle = (event) => {
    event.preventDefault();
    const { productDetails } = this.state.products;
    console.log(productDetails.product_name);
    console.log(productDetails.price);
    const {
      params: { id },
      dispatch,
    } = this.props;
    dispatch(setIdProduct(id));
    dispatch(setImage(productDetails.image));
    dispatch(setName(productDetails.product_name));
    dispatch(setPrice(productDetails.price));
  };

  checkOutHandle = () => {
    const { token } = this.state;
    const { dispatch } = this.props;
    if (token) {
      this.setState({
        isCheckOut: true,
      });
      dispatch(setCheckOut(true));
    }
    this.setState({
      showModal: true,
    });
  };

  componentDidMount() {
    const {
      params: { id },
      // location: { state },
    } = this.props;
    // if (state !== null && !state.isAuthenticated) {
    //   this.setState({
    //     showModal: true,
    //   });
    // }
    this.getProductDetailPage(id);
    this.setCart();
  }

  setCart = () => {
    const {
      params: { id },
    } = this.props;
    let cartItems = localStorage.getItem("cart") || "[]";
    let data = JSON.parse(cartItems);
    let cartItemForProducts = data.filter((item) => {
      if (item.product_id === id) {
        return true;
      }
      return false;
    });

    if (cartItemForProducts.length > 0) {
      this.setState({
        cart: cartItemForProducts[0],
      });
    }
  };

  addToCart = () => {
    const {
      qty,
      size,
      delivery,
      params: { id },
    } = this.props;
    const cartItems = localStorage.getItem("cart") || "[]";
    const data = JSON.parse(cartItems);

    let isProductExist = false;
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].product_id, id);
      if (data[i].product_id === id) {
        data[i].size = size;
        data[i].delivery = delivery;
        data[i].qty = qty;
        isProductExist = true;
      }
    }

    if (!isProductExist) {
      data.push({
        qty,
        size,
        delivery,
        product_id: id,
      });
    }

    localStorage.setItem("cart", JSON.stringify(data));
  };

  render() {
    const { cart } = this.state;
    const { productDetails } = this.state.products;
    const {
      params: { id },
      // navigate,
      dispatch,
      // qty,
      size,
      delivery,
      checkOut,
    } = this.props;
    console.log("checkout :", checkOut);
    if (this.state.isCheckOut) return <Navigate to="/payment" />;

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
          <div className="img-bg-menu-detail"></div>
          {id ? (
            <div className="bg-img-detail-menu">
              <div className="title-header-d-menu">
                <b>
                  {productDetails.category_name} &gt;{" "}
                  {productDetails.product_name}
                </b>
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
                      type="submit"
                      className="btn btn-secondary btn-lg btn-block aside-button"
                      onClick={this.addToCart}
                    >
                      Add to cart
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block aside-button"
                    >
                      Ask to staff
                    </button>
                  </div>
                  <div className="card-deck card-content-d-menu">
                    <div className="card rounded card-d-menu">
                      <p>
                        Delivery only on <b>Monday to Friday</b> at{" "}
                        <b>1-7 pm</b>
                      </p>
                      <p>{productDetails.description}</p>
                      <p className="text-center">
                        <b>Choose a size </b>
                      </p>
                      <div className="d-flex col-md-12 justify-content-between icon-size-d-menu">
                        <a
                          href=" #"
                          onClick={() => {
                            dispatch(setSize("Regular"));
                          }}
                        >
                          R
                        </a>
                        <a
                          href=" #"
                          onClick={() => {
                            dispatch(setSize("Large"));
                          }}
                        >
                          L
                        </a>
                        <a
                          href=" #"
                          onClick={() => {
                            dispatch(setSize("Extra Large"));
                          }}
                        >
                          XL
                        </a>
                      </div>
                    </div>
                    <div className="text-center">
                      <p>
                        <b>Choose Delivery Methods </b>
                      </p>
                      <div className="d-flex col-md-12 icon-delivery-d-menu justify-content-around">
                        <input
                          type="radio"
                          className="btn-check"
                          id="dinein"
                          value="Dine in"
                          checked={delivery === "Dine in"}
                          onChange={(event) => {
                            dispatch(setDelivery(event.target.value));
                          }}
                        />
                         <label className="icon-delivery-d-menu" htmlFor="pick">
                          <a href=" #" >Dine in</a>
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          id="door"
                          value="Door Delivery"
                          checked={delivery === "Door Delivery"}
                          onChange={(event) => {
                            dispatch(setDelivery(event.target.value));
                          }}
                        />
                       
                        <label className="icon-delivery-d-menu" htmlFor="pick">
                          <a href=" #" >Door Delivery</a>
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          id="pick"
                          value="Pick up"
                          checked={delivery === "Pick up"}
                          onChange={(event) => {
                            dispatch(setDelivery(event.target.value));
                          }}
                        />
                        <label className="icon-delivery-d-menu" htmlFor="pick">
                          <a href=" #" >Pick up</a>
                        </label>
                      </div>
                    </div>
                    <label className="set-time">
                      Set time :
                      {/* <input
                    type="datetime-local"
                    placeholder="Enter the time will you arrived"
                    title="Set Time"
                    required=""
                    defaultValue={"Enter the time will you arrived"}
                  /> */}
                      <input
                        type="time"
                        id="inputPassword6"
                        className="form-control border-0 w-100"
                        value={this.state.time}
                        onChange={(event) => {
                          dispatch(setTime(event.target.value));
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div className="card rounded mr-5">
                  <div className="d-flex">
                    <div className="col-md-9 card-checkout">
                      <div className="">
                        <a href=" ">
                          <img
                            className="img-menu-detail"
                            src={`${process.env.REACT_APP_BASE_URL}${productDetails.image}`}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ms-2 col-md-5 text-md-left">
                        <p className="title fw-bold">
                          {productDetails.product_name}
                        </p>
                        <div className="d-flex">
                          {cart.qty !== 0 ? (
                            <p className="qty">{`${cart.qty}x `}</p>
                          ) : null}
                          <p className="size ms-md-2 ms-0">{size}</p>
                        </div>
                      </div>
                      {/* <div>
                      <h3>Cold Brew</h3>
                      <p>1x(Large)</p>
                      <p>1(Reguler)</p>
                    </div> */}
                      <div className="px-4">
                        {/* <div className="col-sm-12 mx-auto">
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
                      </div> */}
                        <div className="d-flex justify-content-center">
                          <button
                            onClick={() => {
                              if (cart.qty > 0) {
                                dispatch(decrement());
                              }
                            }}
                            className="btn btn-choco rounded-circle"
                          >
                            -
                          </button>
                          <div className="col-md-4 mx-3 mx-md-0 text-center mt-1 fw-bold">
                            {cart.qty}
                          </div>
                          <button
                            onClick={() => {
                              dispatch(increment());
                            }}
                            className="btn btn-choco rounded-circle"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 button-checkout">
                      {/* <div>
                      <Link to="/payment">Chekcout</Link>
                    </div> */}
                      <button
                        onClick={this.checkOutHandle}
                        className="btn btn-warning w-100 h-100 rounded-4"
                      >
                        CHECKOUT
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedPage>
            </div>
          ) : null}
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
    cart: { qty, size, delivery },
  } = state;
  return { qty, size, delivery };
};

export default connect(mapStateToProps)(withParams(ProductDetail));
