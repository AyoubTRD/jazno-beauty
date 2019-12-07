import React, { useState } from "react";
import { IoIosArrowDown as Arrow } from "react-icons/io";

import requestApi from "../apis/requestApi";
import Loader from "./svg/loader";

import history from "../history";

const RequestForm = () => {
  const qtyOptions = [
    "منتج واحد بـ299 درهم",
    "منتجين بـ499 درهم",
    "3 منتجات بـ599 درهم"
  ];
  const [qty, setQty] = useState(1);
  const [showQty, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const qtyPrices = {
    1: 299.0,
    2: 499.0,
    3: 599.0
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const {
        phone: { value: phone },
        name: { value: name },
        address: { value: address }
      } = e.target;
      if (!name) {
        return setError("المرجو إدخال الإسم");
      }
      if (!address) {
        return setError("المرجو إدخال العنوان");
      }
      if (phone.length < 8) {
        return setError("رقم الهاتف غير صحيح");
      }
      setError("");
      setLoading(true);
      await requestApi.post("/request", {
        name,
        address,
        quantity: qty,
        phone
      });
      setLoading(false);
      window.fbq("track", "Purchase", {currency: "MAD", value: qtyPrices[qty]});
      history.push(`/success`);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("لقد حصل خطأ أثناء تسجيل طلبك، المرجو المحاولة ثانية.");
    }
  };

  return (
    <div className="request-form-container" id="request-form" dir="rtl">
      <div className="container">
        <h2 className="h h-request">لطلب المنتج</h2>
        <form
          className="request-form"
          data-aos="fade-in"
          onSubmit={handleSubmit}
        >
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
          <button className="btn btn-submit" disabled={loading} type="submit">
            اطلب الآن
          </button>
          {loading ? <Loader className="loader" /> : null}
          <p className="p-error">{error}</p>
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
