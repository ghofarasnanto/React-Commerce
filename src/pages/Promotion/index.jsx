import React, { Component } from "react";
import axios from "axios";
import Promotion from "../../component/Promotion";

export class Promos extends Component {
    constructor() {
        super();
        this.state = {
          promosCollection: [],
          promosName: "",
          isFetching: false,
        };
      }
  componentDidMount() {
    this.setState({ isFetching: true });
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/promos`)
      .then((res) => {
        this.setState({ promosCollection: res.data.data });
        console.log(res);
        this.setState({ isFetching: false });
      })
      .catch(function (error) {
        console.log(error);
        this.setState({ isFetching: false });
      });
  }

  render() {   
    return (
      <div className="promotion ">
        <Promotion promos={this.state.promosCollection} loading={this.state.loading}></Promotion>                              
      </div>
    );
  }
}

export default Promos;
