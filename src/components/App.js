import React, { useEffect } from "react";
import AOS from "aos";

import Landing from "./Landing";
import Ingrediants from "./Ingrediants";
import DocTestimonials from "./DoctorTestimonials";
import Testimonials from "./Testimonials";
import Benefits from "./Benefits";
import Guide from "./Guide";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900
    });
  }, []);
  return (
    <>
      <Landing />
      <Benefits />
      <Testimonials />
      <Guide />
      <Ingrediants />
      <DocTestimonials />
    </>
  );
};

export default App;
