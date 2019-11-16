import React from "react";

import whiteTea from "../assets/img/white-tea.jpg";
import rhodiola from "../assets/img/rhodiola.jpg";
import ginseng from "../assets/img/ginseng.jpg";
import centellaAsiatica from "../assets/img/centella asiatica.jpg";

const Ingrediants = () => {
  return (
    <div className="container">
      <div id="ingrediants" className="ingrediants">
        <div className="row">
          <div className="ingrediant col-md-3 col-6" data-aos="fade-right">
            <p className="ingrediant-name">الشاي الأبيض</p>
            <img src={whiteTea} alt="white tea" className="ingrediant-image" />
          </div>
          <div className="ingrediant col-md-3 col-6" data-aos="fade-up">
            <p className="ingrediant-name">rhodiola (نبتة صينية)</p>
            <img src={rhodiola} alt="rhodiola" className="ingrediant-image" />
          </div>
          <div className="ingrediant col-md-3 col-6" data-aos="fade-down">
            <p className="ingrediant-name">ginseng (نبتة صينية)</p>
            <img src={ginseng} alt="ginseng" className="ingrediant-image" />
          </div>
          <div className="ingrediant col-md-3 col-6" data-aos="fade-left">
            <p className="ingrediant-name">centella asiatica (نبتة صينية)</p>
            <img
              src={centellaAsiatica}
              alt="centella asiatica"
              className="ingrediant-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingrediants;
