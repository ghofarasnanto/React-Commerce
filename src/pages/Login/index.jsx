import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../../AnimatePage";
import { FormErrors } from "../../component/FormError";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

import "./login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      isPasswordShown: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " address is invalid";
        break;
      case "password":
        passwordValid = value.length >= 5;
        fieldValidationErrors.password = passwordValid
          ? ""
          : " atleast 5 characaters required";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render() {
    const { isPasswordShown } = this.state;
    return (
      <React.Fragment>
        <Toaster/> 
        <div className="container">
          <aside className="side-content">
            <img
              className="side-img"
              src="assets/img/sign/pict1.png"
              alt="side-img"
            />
          </aside>
          <main className="main-content">           
            <header className="main-header">
              <div>
                <div className="side-logo"></div>
              </div>
              <div className="main-header-title">
                <div href=" ">
                  <Link to="/">
                    <img
                      src="/assets/img/home/logo.png"
                      alt="logo"
                      className="logo"
                    />
                  </Link>
                </div>
                <h5>Coffee Shop</h5>
                <p>Login</p>
              </div>
            </header>
            <div className="row-login">
            <AnimatedPage>
              <form className="register-form">
                <FormErrors formErrors={this.state.formErrors} />
                <div
                  className={`input-form ${this.errorClass(
                    this.state.formErrors.email
                  )}`}
                >
                  <label htmlFor="email">Email Address :</label>
                  <input required
                    type="email"
                    className="email-input"
                    name="email"
                    placeholder="Enter your email address"
                    value={this.state.email}
                    onChange={this.handleUserInput}                  
                  />
                </div>

                <div
                  className={`input-form ${this.errorClass(
                    this.state.formErrors.password
                  )}`}
                >
                  <label htmlFor="password">Password</label>
                  <input required
                    className="email-input"
                    name="password"
                    placeholder="Enter your password"
                    type={isPasswordShown ? "text" : "password"}
                    value={this.state.password}
                    onChange={this.handleUserInput}
                  />
                  <i
                    className="fa fa-eye password-icon"
                    onClick={this.togglePasswordVisiblity}
                  />
                </div>

                <div className="pass" href=" ">
                  <Link to="/forgotpassword">Forgot password?</Link>
                </div>

                <div
                  className="register-submit"                  
                  onClick={() => {
                    const { email, password } = this.state;
                    const body = {
                      email,
                      password,
                    };
                    // console.log(body)
                    axios
                      .post(`${process.env.REACT_APP_BASE_URL}/auth/signin`, body)
                      .then((result) => {
                        toast.success("Login successfully!");
                        console.log(result);
                        localStorage.setItem(
                          "token",
                          JSON.stringify(result.data.data.token)
                        );
                        this.setState({
                          isError: false,
                          errorMsg: "",
                        });
                      })
                      .catch((error) => {
                        if (error.response.status === 400) {
                          toast.error("Email or Password is wrong");
                        }
                        if (error.response.status === 500) {
                          toast.error("Input Required.");
                        }
                      });
                  }}
                >
                  Login
                </div>
                <div className="google-submit">
                  <img
                    src="/assets/img/google.png"
                    alt="google"
                    className="google"
                  />
                  Login with google
                </div>
                <section className="has-account">
                  <div className="underline"></div>
                  <p className="has-account-text">Already have an account?</p>
                  <div className="underline"></div>
                </section>
                <Link to="/signup" className="login-button">
                  Sign up Here
                </Link>
              </form>
              </AnimatedPage>
            </div>
          </main>
        </div>
        <footer>
          <div className="page-content-footer">
            <div className="main-footer">
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

export default Login;
