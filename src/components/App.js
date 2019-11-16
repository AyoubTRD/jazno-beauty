import React, { useEffect } from "react";
import AOS from "aos";

import Landing from "./Landing";
import Ingrediants from "./Ingrediants";
import DocTestimonials from "./DoctorTestimonials";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900
    });
    window.onscroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo(0, scrollTop);
    };
  }, []);
  return (
    <>
      <Landing />
      <Ingrediants />
      <DocTestimonials />
    </>
  );
};

export default App;
