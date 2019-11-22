import React from "react";

import guide1 from "../assets/img/tip 1.png";
import guide2 from "../assets/img/tip 2.png";
import guide3 from "../assets/img/tip 3.png";

const Guide = () => {
  return (
    <section id="guides" className="guides" dir="rtl">
      <div className="container">
        <h2 className="h h-secondary-reverse">طريقة الاستعمال</h2>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="guide" data-aos="fade-right">
              <img src={guide1} alt="" className="guide-image" />
              <p className="guide-num">1</p>

              <p className="guide-text" data-aos="zoom-in">
                اغسلي وجهك بالماء الدافئ، ثم نظفيه تمامًا وأزيلي الماكياج
                والأوساخ.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4" data-aos="fade-in">
            <div className="guide">
              <img src={guide2} alt="" className="guide-image" />
              <p className="guide-num">2</p>
              <p className="guide-text" data-aos="zoom-in">
                ضعي كمية صغيرة من الكريم على وجهك. أثناء الاستخدام، دلكي وجهك
                بلطف بحركة دائرية في اتجاه عقارب الساعة.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4" data-aos="fade-left">
            <div className="guide">
              <img src={guide3} alt="" className="guide-image" />
              <p className="guide-num">3</p>
              <p className="guide-text" data-aos="zoom-in">
                انتظري حتى يُمتص الكريم تمامًا. استخدمي Gel Lanbena مرتين في
                اليوم صباحًا ومساءًا. خلال 14 يومًا، ستصبح بشرتك أكثـر تحسنا مع
                اختفاء جميع الآثار والبقع.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
