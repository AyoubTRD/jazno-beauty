import React from "react";

import beforeAndAfter1 from "../assets/img/before&after.jpg";
import beforeAndAfter2 from "../assets/img/before&after2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "فاطمة الزهراء",
      text:
        "لقد كنت أعاني من المشاكل في بشرتي خصوصا من حب الشباب والبقع الداكنة. لكن بعد أن استعملت Gel Lanbena استطعت أن اتخلص من جميع مشاكلي مع البشرة، وهنا صورة لي قبل وبعد الاستعمال.",
      animation: "fade-right",
      image: beforeAndAfter1
    },
    {
      name: "فاطمة الزهراء",
      text:
        "لقد كنت أعاني من المشاكل في بشرتي خصوصا من حب الشباب والبقع الداكنة. لكن بعد أن استعملت Gel Lanbena استطعت أن اتخلص من جميع مشاكلي مع البشرة، وهنا صورة لي قبل وبعد الاستعمال.",
      animation: "fade-left",
      image: beforeAndAfter2
    }
  ];
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="h h-secondary" data-aos="fade-down">
          شهادات زبنائنا
        </h2>
        {testimonials.map(testimonial => (
          <div
            className="testimonial"
            data-aos={testimonial.animation}
            dir="rtl"
            key={testimonial.text}
          >
            <div className="row">
              <div className="col-sm-8">
                <h2 className="testimonial-name">{testimonial.name}</h2>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              <div className="col-sm-4">
                <img
                  src={testimonial.image}
                  alt=""
                  className="testimonial-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
