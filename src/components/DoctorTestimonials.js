import React from "react";

import doctor from "../assets/img/doctor.jpg";

const DoctorTestimonials = () => {
  return (
    <div className="container">
      <section id="doc-testimonials" dir="rtl" className="doc-testimonials">
        <h2 className="h h-doc" data-aos="fade-in">
          يوصي به الأطباء:
        </h2>
        <div className="doc-testimonial">
          <img
            className="doc-testimonial-image"
            data-aos="fade-left"
            src={doctor}
            alt=""
          />
          <p className="doc-testimonial-text" data-aos="fade-right">
            بفضل مكوناته الطبيعية واعتماده على تقنيات الطب الصيني التقليدي،
            يعتبر Gel Lanbena أفضل اختيار لبشرتك.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DoctorTestimonials;
