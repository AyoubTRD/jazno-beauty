import React from "react";

import { FaWhatsapp as Whatsapp } from "react-icons/fa";

const Socialbar = () => {
  const phone = "212607777246";
  const text = "أنا مهتم";
  return (
    <a
      className="bar"
      target="blank"
      href={`https://wa.me/${phone}?lang=ar&text=${encodeURI(text)}`}
    >
      <div className="bar-icon bar-icon-whatsapp">
        <Whatsapp className="bar-icon-icon" />
        <p className="bar-icon-text">راسلنا عبر الواتساب</p>
      </div>
    </a>
  );
};

export default Socialbar;
