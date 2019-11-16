import React from "react";

import productImage from "../assets/img/prod.png";
import { FaShoppingCart as Cart } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="landing">
      <h1 className="h h-main">Gel Lanbena</h1>
      <div className="landing-hero">
        <img
          src={productImage}
          alt="Gel lanbena"
          className="landing-hero-image"
        />
        <div className="landing-hero-info">
          <p className="landing-hero-info-quote" dir="rtl">
            اطلبي Lanbena Gel الان واحصلي على خصم 50%
          </p>
          <p className="landing-hero-info-price" dir="rtl">
            <span className="landing-hero-info-price-old">599 DH</span>
            299 DH
          </p>
          <button className="btn btn-request">
            <Cart className="btn-request-cart" /> اطلب الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
