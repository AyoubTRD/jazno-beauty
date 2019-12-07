import React from "react";
import { Link } from "react-router-dom";

import { MdDone as Done } from "react-icons/md";
import { IoIosArrowBack as BackArrow } from "react-icons/io";

import Footer from "./Footer";

const Success = () => {
  return (
    <>
      <div className="success-container footer-support">
        <div className="success">
          <div className="success-icon-container">
            <Done className="success-icon" />
          </div>
          <h2 className="success-text">
            تم طلب المنتج بنجاح. <br /> سنتصل بكم في أقرب وقت ممكن
          </h2>
          <Link className="success-link" to="/">
            <span className="success-link-text">عودة</span>
            <BackArrow className="success-link-icon" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
