import React from "react";

import { FaWhatsapp as Whatsapp } from "react-icons/fa";

const Socialbar = () => {
  return (
    <div className="bar">
      <div className="bar-icon bar-icon-whatsapp">
        <Whatsapp className="bar-icon-icon" />
        <p className="bar-icon-text">راسلنا عبر الواتساب</p>
      </div>
    </div>
  );
};

export default Socialbar;
