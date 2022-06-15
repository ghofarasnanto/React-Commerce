import React, { Component } from "react";

export class Promos extends Component {
  render() {
    const { promos, loading } = this.props;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="promotion ">
        {promos
          ?  promos.map((promo) => (
              <div key={promo.id} className="promotion-box ">
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/${promo.image}`}
                  alt="promo"
                />
                
                  <div className="promotion-content">                   
                    <div className="promotion-header ">
                      <h2 className="name">{promo.promo_name}</h2>
                    </div>
                    <p className="promotion-line ">{promo.description_promo}</p>
                   
                  </div>
                
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Promos;
