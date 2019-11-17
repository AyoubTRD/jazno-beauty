import React from "react";

import doctor from "../assets/img/doctor.jpg";

const DoctorTestimonials = () => {
  return (
    <section id="doc-testimonials" dir="rtl" className="doc-testimonials">
      <div className="container">
        <h2 className="h h-secondary" data-aos="fade-in">
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
      </div>
    </section>
  );
};

export default DoctorTestimonials;
