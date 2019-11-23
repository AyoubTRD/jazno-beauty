import React from "react";
import { Link } from "react-router-dom";

import { MdDone as Done } from "react-icons/md";
import { IoIosArrowBack as BackArrow } from "react-icons/io";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success">
        <div className="success-icon-container">
          <Done className="success-icon" />
        </div>
        <h2 className="success-text">تم طلب المنتج بنجاح.</h2>
        <Link className="success-link" to="/">
          <span className="success-link-text">عودة</span>
          <BackArrow className="success-link-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Success;
