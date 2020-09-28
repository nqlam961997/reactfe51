import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <>
        <section id="smartphone" class="container-fluid pt-5 pb-5">
          <h1 class="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <Product />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <Product />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <Product />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <Product />
            </div>
          </div>
        </section>
      </>
    );
  }
}
