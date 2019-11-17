import React from "react";

const RequestForm = () => {
  return (
    <div className="form-container" id="request-form" dir="rtl">
      <div className="container">
        <form className="request-form">
          <div className="field">
            <label htmlFor="quantity" className="field-label">
              عدد المنتجات
            </label>
            <select name="qty" id="qty" className="field-select">
              <option value="1">منتج واحد ب299 درهم</option>
              <option value="2">منتجين ب499 درهم</option>
              <option value="3">3 منتجات ب599 درهم</option>
            </select>
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
      </div>
    </div>
  );
};

export default RequestForm;
