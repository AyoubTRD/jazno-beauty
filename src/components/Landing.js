import React from "react";

import productImage from "../assets/img/prod.png";
import { FaShoppingCart as Cart } from "react-icons/fa";
import { animateScroll } from "react-scroll";

const Landing = () => {
  const scroll = () => {
    animateScroll.scrollTo(
      document.querySelector("#request-form").scrollTop ||
        document.querySelector("#request-form").offsetTop
    );
  };
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
          <button className="btn btn-request" onClick={scroll} dir="rtl">
            <span>اطلب الآن</span>{" "}
            <span>
              <Cart className="btn-request-cart" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
