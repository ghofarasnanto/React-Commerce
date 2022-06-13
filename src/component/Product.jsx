import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Product extends Component {
  render() {
    const { products, loading } = this.props;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    const numberFormat = (value) =>
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);

    return (
      <div className="menu-boxes GridView">
        {products
          ? products.map((product) => (
              <div key={product.id} className="menu-box-wrapper box-text">
                <Link to={`/products/${product.id}`}>
                  <div className="menu-box">
                    <div className="menu-box-header ">
                      <div className="menu-images ">
                        <img
                          src={`http://localhost:8080${product.image}`}
                          alt="product "
                        />
                      </div>
                    </div>
                    <div className="menu-box-content-header">
                      <p className="box-content-header">
                        {product.product_name}
                      </p>
                      <p className="box-content-subheader">
                        {numberFormat(product.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Product;
