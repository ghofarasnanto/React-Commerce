import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../../AnimatePage";

export class ForgotPassword extends Component {
  render() {
    return (
      <React.Fragment>
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
              <div className="main-header-title logo-pass">
                <a href=" ">
                <Link to="/">
                    <img
                      src="/assets/img/home/logo.png"
                      alt="logo"
                      className="logo"
                    />
                  </Link>
                </a>
                <p>Coffee Shop</p>
              </div>
              <h1>Forgot your Password ?</h1>
              <p>Don't worry we got your back!</p>
            </header>
            <AnimatedPage>
            <div className="row-login">
              <form className="register-form">
                <section className="email-input">
                  <label for="email">Email Address :</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address to get link"
                    pattern="[^ @]*@[^ @]*"
                    required
                  />
                </section>
                <div className="register-submit">Send</div>
                <section className="has-account">
                  <p className="has-account-text">
                    Click here if you didn't receive any link in 2 minutes
                  </p>
                  <p className="timer-password">01:45</p>
                </section>
                <Link to="/login" className="login-button">
                  Resend Link
                </Link>
              </form>
            </div>
            </AnimatedPage>
          </main>
        </div>
        <section>
          <div className="page-content-footer">
            <footer className="main-footer">
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
            </footer>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
