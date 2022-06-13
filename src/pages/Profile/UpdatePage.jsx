import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AnimatedPage from "../../AnimatePage";
import BASE_URL from "../../BASE_URL";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      userName: "",
      deliveryAddress: "",
      mobileNumber: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      photo: "",
      formErrors: { email: "", number: "" },
      emailValid: false,
      numberValid: false,
      formValid: false,
    };
  }

  getProfile = () => {
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
          emailAddress: res.data.data.email_address,
          userName: res.data.data.username,
          deliveryAddress: res.data.data.delivery_address,
          mobileNumber: res.data.data.mobile_number,
          firstName: res.data.data.first_name,
          lastName: res.data.data.last_name,
          birthDate: res.data.data.birth_date,
          gender: res.data.data.gender,
          image: res.data.data.image,
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
  };

  updatePage = () => {
    let body = new FormData();    
    if (this.state.userName !== "") {
      body.append("userName", this.state.userName);
    }
    if (this.state.deliveryAddress !== "") {
      body.append("deliveryAddress", this.state.deliveryAddress);
    }
    if (this.state.mobileNumber !== "") {
      body.append("mobileNumber", this.state.mobileNumber);
    }
    if (this.state.firstName !== "") {
      body.append("firstName", this.state.firstName);
    }
    if (this.state.lastName !== "") {
      body.append("lastName", this.state.lastName);
    }
    if (this.state.birthDate !== "") {
      body.append("birthDate", this.state.birthDate);
    }
    if (this.state.gender !== "") {
      body.append("gender", this.state.gender);
    }
    if (this.state.image !== "") {
      body.append("image", this.state.image);
    }
    return body;
  };

  editProfile = (event) => {
    event.preventDefault();
    const body = this.updatePage();
    const token = localStorage.getItem("token");
    // console.log(token);
    const decoded = jwt_decode(token);
    axios
      .patch(`${BASE_URL}/users/${decoded.id}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      })      
      .then((res) => {
        console.log(res.data);
        this.setState({
          updateSuccess: true,
          successMsg: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: err.response.data.message,
        });
      });
  };

  componentDidMount() {
    this.getProfile();
  }

  // handleUserInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({ [name]: value }, () => {
  //     this.validateField(name, value);
  //   });
  // };

  // validateField(fieldName, value) {
  //   let fieldValidationErrors = this.state.formErrors;
  //   let emailValid = this.state.emailValid;
  //   let numberValid = this.state.numberValid;

  //   switch (fieldName) {
  //     case "email":
  //       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //       fieldValidationErrors.email = emailValid ? "" : " address is invalid";
  //       break;
  //     case "number":
  //       numberValid = value.match(/^\+?[0-9]{7,14}$/);
  //       fieldValidationErrors.number = numberValid
  //         ? ""
  //         : " atleast 7 numbers required";
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState(
  //     {
  //       formErrors: fieldValidationErrors,
  //       emailValid: emailValid,
  //       numberValid: numberValid,
  //     },
  //     this.validateForm
  //   );
  // }

  // validateForm() {
  //   this.setState({
  //     formValid: this.state.emailValid && this.state.numberValid,
  //   });
  // }

  // errorClass(error) {
  //   return error.length === 0 ? "" : "has-error";
  // }

  render() {
    const {
      emailAddress,
      userName,
      deliveryAddress,
      mobileNumber,
      firstName,
      lastName,
      birthDate,
      // gender,
      image,
    } = this.state;

    return (
      <div>
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
              <div>
                <main>
                <form onSubmit={this.editProfile}>
                  <img
                    className="img-bg-profile"
                    src="assets/img/background.png"
                    alt="bg-profile-card"
                  />
                  <div className="bg-img">
                    <div className="title-header">
                      <b>User Profile</b>
                    </div>
                    <div className="row justify-content-md-center my-3 p-3 bg-white rounded shadow-sm bg-input">
                      <div
                        className="col-sm-4 aside-input"
                        style={{ padding: 15 }}
                      >
                        <img
                          className="img-profile"
                          src={`http://localhost:8080/${image}`}
                          alt="user"
                        />
                        <div className="name-header">
                          <b>{userName}</b>
                          <p>{emailAddress}</p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg btn-block aside-button"
                        >
                          Choose photo
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg btn-block aside-button"
                        >
                          Remove photo
                        </button>
                        <button
                          type="button"
                          className="btn btn-third btn-lg btn-block aside-button"
                        >
                          Edit Password
                        </button>
                        <p className="ask-text">
                          Do you want to save the change?
                        </p>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block aside-button"
                        >
                          Save Change
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg btn-block aside-button"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-third btn-lg btn-block aside-button"
                        >
                          Log Out
                        </button>
                      </div>
                      <div className="main-input col-sm-8">
                        <div className="contact-title">
                          Contact
                          {/* <div className="edit-icons">
                                <a href="# ">
                                  <i className="fa fa-pencil"></i>
                                </a>
                              </div> */}
                        </div>
                        <div
                          className="row row-space"
                          style={{ margin: 0, padding: 0 }}
                        >
                          <div className="col-6">
                            <div className="input-group">
                              <label>Email address :</label>
                              {/* <input type="email" placeholder="Email" title="Please enter you Email" required="" />
                               */}
                              <input
                                name="password"
                                placeholder="Enter your password"
                                type="email"
                                required=""
                                value={emailAddress}
                                onChange={this.handleUserInput}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-group">
                              <label>Mobile number :</label>
                              <input
                              name="mobileNumber"
                                type="number"
                                placeholder="Mobile Number"
                                title="Please enter you Mobile Number"
                                required=""
                                id="mobileNumber"
                                value={mobileNumber}
                                onChange={(event) => {
                                  this.setState({
                                    phone: event.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row row-space space-input">
                          <div className="col-6">
                            <div className="input-group">
                              <label>Delivery address :</label>
                              <textarea
                                type="text"
                                placeholder="Address"
                                title="Please enter you Address"
                                required=""
                                value={deliveryAddress}
                                onChange={this.handleUserInput}
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="profile-title">Details</div>
                        <div
                          className="row row-space"
                          style={{ margin: 0, padding: 0 }}
                        >
                          <div className="col-6">
                            <div className="input-group">
                              <label>Display name :</label>
                              <input
                                type="text"
                                placeholder="Displayname"
                                title="Please enter you Display Name"
                                required=""
                                value={userName}
                                onChange={this.handleUserInput}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-group">
                              <label>First name :</label>
                              <input
                                type="text"
                                placeholder="Firstname"
                                title="Please enter you First Name"
                                required=""
                                value={firstName}
                                onChange={this.handleUserInput}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row row-space space-input">
                          <div className="col-6">
                            <div className="input-group">
                              <label>Last name :</label>
                              <input
                                type="text"
                                placeholder="Lastname"
                                title="Please enter you Last Name"
                                required=""
                                value={lastName}
                                onChange={this.handleUserInput}
                              />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="input-group">
                              <label>Brithdate :</label>
                              <input
                                type="date"
                                placeholder="Brithdate"
                                title="Please enter you Brithdate"
                                required=""
                                value={birthDate}
                                onChange={this.handleUserInput}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row row-space space-radio-gender">
                          <label className="radio-container">
                            Male
                            <input
                              type="radio"
                              checked="checked"
                              name="gender"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio-container">
                            Female
                            <input type="radio" name="gender" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </main>
              </div>
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
      </div>
    );
  }
}

export default Profile;
