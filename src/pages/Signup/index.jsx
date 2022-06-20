import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormErrors } from "../../component/FormError";
import AnimatedPage from "../../AnimatePage";
import BASE_URL from "../../BASE_URL";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import "./signup.css";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      number: "",
      formErrors: { email: "", password: "", number: "" },
      emailValid: false,
      passwordValid: false,
      numberValid: false,
      formValid: false,
      isPasswordShown: false,
      isLoading: false,
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
    let numberValid = this.state.numberValid;

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
      case "number":
        numberValid = value.match(/^\+?[0-9]{7,14}$/);
        fieldValidationErrors.number = numberValid
          ? ""
          : " atleast 7 numbers required";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        numberValid: numberValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.numberValid,
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
                <h3>Coffee Shop</h3>
                <p className="reg-name">Sign Up</p>
              </div>
            </header>
            <div className="row-login">
            <AnimatedPage>
              <form className="register-form">
                <FormErrors formErrors={this.state.formErrors} />
                <div
                  className={`${this.errorClass(this.state.formErrors.email)}`}
                >
                  <label htmlFor="email">Email Address :</label>
                  <input
                    type="email"
                    required
                    className="email-input"
                    name="email"
                    placeholder="Enter your email address"
                    value={this.state.email}
                    onChange={this.handleUserInput}
                  />
                </div>

                <div
                  className={`${this.errorClass(
                    this.state.formErrors.password
                  )}`}
                >
                  <label htmlFor="password">Password</label>
                  <input
                    className="email-input"
                    name="password"
                    placeholder="Enter your password"
                    type={isPasswordShown ? "text" : "password"}
                    value={this.state.password}
                    onChange={this.handleUserInput}
                  />
                  <i
                    className={isPasswordShown ? "fa fa-eye password-icon" : "fa fa-eye-slash password-icon" }
                    onClick={this.togglePasswordVisiblity}
                  />
                </div>

                <div
                  className={`${this.errorClass(this.state.formErrors.number)}`}
                >
                  <label htmlFor="number">Mobile Number</label>
                  <input
                    type="number"
                    className="email-input"
                    name="number"
                    placeholder="Enter your phone number"
                    value={this.state.number}
                    onChange={this.handleUserInput}
                  />
                </div>
                <button
                  type="button"
                  className="register-submit"
                  onClick={() => {
                    const { email, number, password } = this.state;
                    const body = {
                      email: email,
                      mobileNumber: number,
                      pass: password,
                    };
                    axios
                      .post(`${BASE_URL}/auth/register`, body)
                      .then((result) => {
                        toast.success("Account created successfully!");
                        console.log(result.data);
                        localStorage.setItem(
                          "userinfo-customer",
                          JSON.stringify(result.data)
                        );
                        this.setState({
                          isError: false,
                          errorMsg: "",
                        });
                      })
                      .catch((error) => {
                        if (error.response.status === 400) {
                          toast.error("Email Registered!");                         
                        }
                        if (error.response.status === 500) {
                          toast.error("Input Required!");
                        }
                      });
                  }}
                >
                  Sign Up
                </button>
                {/* <button type="submit" className="register-submit btn btn-primary" disabled={!this.state.formValid}                                
                 onClick={() => {
                   const {
                     email,
                     number,
                     password,
                   } = this.state;
                   const body = {
                     email: email,
                     mobileNumber: number,
                     pass: password,
                   };
                   axios
                     .post( "http://localhost:8080/auth/register", body)
                     .then((result) => {
                       console.log(result.data);
                       localStorage.setItem(
                         "userinfo-customer",
                         JSON.stringify(result.data)
                       );
                       this.setState({
                         isError: false,
                         errorMsg: "",                          
                       });
                     })
                     .catch((error) => {
                       this.setState({
                         isError: true,
                         errorMsg: error.response.data.status,
                       });
                     });
                 }}                 
                >Sign up</button> */}
                <div className="google-submit">
                  <img
                    src="/assets/img/google.png"
                    alt="google"
                    className="google"
                  />
                  Sign up with google
                </div>
                <section className="has-account">
                  <div className="underline"></div>
                  <p className="has-account-text">Already have an account?</p>
                  <div className="underline"></div>
                </section>
                <Link to="/login" className="login-button">
                  Login Here
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

export default Signup;
