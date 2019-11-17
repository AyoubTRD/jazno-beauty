import React from "react";

const Benefits = () => {
  const benefits = [
    "آثار حب الشباب.",
    "الكلف والنمش.",
    "المسام الواسعة.",
    "التصبغ وتفاوت لون البشرة",
    "علامات التمدد.",
    "أضرار أشعة الشمس.",
    "البشرة الحساسة ضد العلاجات الكيميائية والحرارة.",
    "البشرة الباهتة والجافة.",
    "التشققات الجلدية الناتجة عن زيادة الوزن والحمل.",
    "الخطوط الدقيقة والتجاعيد الناتجة عن الشيخوخة.",
    "البشرة التي تعرضت للتلف من الدواء، وحروق الشمس أو العلاج الكيميائي."
  ];
  return (
    <section id="benefits" className="benefits" dir="rtl">
      <div className="container">
        {benefits.map(ben => (
          <p className="benefit" data-aos="fade-left" key={ben}>
            <span>{ben}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
