import React, { useState } from "react";
import { IoIosArrowDown as Arrow } from "react-icons/io";

const RequestForm = () => {
  const qtyOptions = [
    "منتج واحد بـ299 درهم",
    "منتجين بـ499 درهم",
    "3 منتجات بـ599 درهم"
  ];
  const [qty, setQty] = useState(1);
  const [showQty, setShow] = useState(false);

  return (
    <div className="request-form-container" id="request-form" dir="rtl">
      <div className="container">
        <h2 className="h h-request">لطلب المنتج</h2>
        <form className="request-form" data-aos="fade-in">
          <div className="field">
            <label htmlFor="" className="field-label">
              عدد المنتجات
            </label>
            <div className="select">
              <p
                className="select-value-active select-value-arrow select-value"
                onClick={() => setShow(!showQty)}
              >
                <span>{qtyOptions[qty - 1]}</span>
                <span className="arrow">
                  <Arrow />
                </span>
              </p>
              <div className="select-values-wrapper">
                <ul className={`select-values ${showQty ? "" : " d-none"}`}>
                  {qtyOptions.map((qtyOp, i) => (
                    <li
                      className={`select-value select-value-${
                        qty - 1 === i ? "active" : ""
                      }`}
                      onClick={() => {
                        setQty(i + 1);
                        setShow(false);
                      }}
                      key={qtyOp}
                    >
                      <span>{qtyOp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="name" className="field-label">
              الاسم
            </label>
            <input type="text" className="field-input" id="name" name="name" />
          </div>
          <div className="field">
            <label htmlFor="address" className="field-label">
              العنوان
            </label>
            <input
              type="text"
              className="field-input"
              id="address"
              name="address"
            />
          </div>
          <div className="field">
            <label htmlFor="phone" className="field-label">
              رقم الهاتف
            </label>
            <input
              type="number"
              className="field-input"
              id="phone"
              name="phone"
            />
          </div>
          <button className="btn btn-submit" type="submit">
            اطلب الآن
          </button>
        </form>
        <div className="gurantee" dir="rtl">
          <h3 className="gurantee-heading">ضمانات:</h3>
          <p className="gurantee-text">
            إن قمت بشراء ثلاث عبوات وقمت باستعمالها ولم تلاحظي أي نتيجة، سنقوم
            باسترجاع جميع مصاريف المنتج باستثناء مصاريف الشحن.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
