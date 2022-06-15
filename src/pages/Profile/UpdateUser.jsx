import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AnimatedPage from "../../AnimatePage";
import BASE_URL from "../../BASE_URL";
import toast, { Toaster } from "react-hot-toast";


export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      username: "",
      delivery_address: "",
      mobile_number: "",
      first_name: "",
      last_name: "",
      birth_date: "",
      gender: "",
      image: "",
      previewImage: "../../../client/public/assets/img/404.png",
      sourceimage: false,
    };
  }

  handleUserInput = () => {
    const { email_address, username, delivery_address, mobile_number, first_name, last_name, birth_date } = this.state;
    const body = {
      email_address: email_address,
      username: username,
      delivery_address: delivery_address,
      mobile_number: mobile_number,
      first_name: first_name,
      last_name: last_name,
      birth_date:birth_date,
      
    };
    const token = localStorage.getItem("token");
    // console.log(token);
    const decoded = jwt_decode(token);
    axios
      .patch(`${BASE_URL}/users/${decoded.id}`, body, {
        headers: { Authorization: `Bearer ${token}` , "content-type": "multipart/form-data" },
      })
      .then((res) => {
    toast.success("Update successfully!");
        console.log(res);
        this.setState({
          data: res.data.data,
          isFetching: true,
          redirectToReferrer: false,
        });
      })
      .catch(function (error) {
        if (token === null) {
          return error;
        }
        if (error.response.status === 400) {
          toast.error("Update Failed");
        }
        // window.location.href = "/";
      });
  };

  changeImage = (event) => {
    event.preventDefault();
    const imageFile = event.target.files[0];
    const data = { ...this.state };
    if (imageFile) {
      data.image = imageFile;
      this.setState(data);
      const reader = new FileReader();
      reader.onload = () => {
        this.setState(
          { previewImage: reader.result, sourceimage: false, image: imageFile },
          () => {
            console.log(this.state.image);
          }
        );
      };
      reader.readAsDataURL(imageFile);
    }
  };

  render() {   
    return (
      <div>
        <Toaster />
       
          <div>
            <main>
              <img
                className="img-bg-profile"
                src="assets/img/background.png"
                alt="bg-profile-card"
              />
              <div className="bg-img">
                <div className="title-header">
                  <b>User Profile</b>
                </div>
                <AnimatedPage>
                <div className="row justify-content-md-center my-3 p-3 bg-white rounded shadow-sm bg-input">
                  <div className="col-sm-4 aside-input" style={{ padding: 15 }}>
                    <img
                      className="img-profile"
                      src={`${process.env.REACT_APP_BASE_URL}${this.state.image}`}
                      alt="user"
                    />
                    <div className="name-header">
                      <b>{this.state.username}</b>
                      <p>{this.state.email_address}</p>
                    </div>
                    <label className="btn btn-primary btn-lg btn-block aside-button">
                      <input               
                      type="file"
                      name="image"
                      hidden
                      onChange={this.changeImage}
                    />Choose photo</label>
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
                    <p className="ask-text">Do you want to save the change?</p>
                    <div                      
                      type="button"
                      className="btn btn-primary btn-lg btn-block aside-button"  
                      onClick={this.handleUserInput}                  
                    >
                      Save Change
                    </div>
                    <button
                      type="submit"
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
                      <Link to={`/profile/edit`}>
                        <div className="edit-icons">
                          <i className="fa fa-pencil"></i>
                        </div>
                      </Link>
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
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            required={true}                           
                            value={this.state.email_address}     
                           disabled                     
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-group">
                          <label>Mobile number :</label>
                          <input
                            type="number"
                            placeholder="Mobile Number"
                            title="Please enter you Mobile Number"
                            required={true}
                            value={this.state.mobile_number}
                            onChange={(event) => {
                              this.setState({
                                mobile_number: event.target.value,
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
                            required={true}
                            value={this.state.delivery_address}
                            onChange={(event) => {
                              this.setState({
                                delivery_address: event.target.value,
                              });
                            }}   
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
                            required={true}
                            value={this.state.username}
                            onChange={(event) => {
                              this.setState({
                                username: event.target.value,
                              });
                            }}   
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
                            required={true}
                            value={this.state.first_name}
                            onChange={(event) => {
                              this.setState({
                                first_name: event.target.value,
                              });
                            }}  
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
                            required={true}
                            value={this.state.last_name}
                            onChange={(event) => {
                              this.setState({
                                last_name: event.target.value,
                              });
                            }}  
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
                            value={this.state.brith_date}
                            onChange={(event) => {
                              this.setState({
                                brith_date: event.target.value,
                              });
                            }}  
                            required={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row row-space space-radio-gender">
                      <label className="radio-container">
                        Male
                        <input type="radio" defaultChecked="checked" name="gender" />
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
                </AnimatedPage>
              </div>
            </main>
          </div>
      </div>
    );
  }
}

export default Profile;
