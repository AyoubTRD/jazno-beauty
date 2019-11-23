import React, { useEffect } from "react";
import AOS from "aos";

import Landing from "./Landing";
import Ingrediants from "./Ingrediants";
import DocTestimonials from "./DoctorTestimonials";
import Testimonials from "./Testimonials";
import Benefits from "./Benefits";
import Guide from "./Guide";
import RequestForm from "./RequestForm";
import Socialbar from "./Socialbar";

import Success from "./Success";

import AnimatedSwitch from "./mini/AnimatedSwitch";
import AnimatedRoute from "./mini/AnimatedRoute";
import { Router, Link } from "react-router-dom";
import history from "../history";

const LandingPage = () => (
  <>
    <Socialbar />
    <Landing />
    <Benefits />
    <Testimonials />
    <Guide />
    <Ingrediants />
    <DocTestimonials />
    <RequestForm />
  </>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900
    });
  }, []);
  return (
    <Router history={history}>
      <AnimatedSwitch animationClassName="slide" animationTimeout={800}>
        <AnimatedRoute path="/" exact component={LandingPage} />
        <AnimatedRoute path="/success" exact component={Success} />
      </AnimatedSwitch>
    </Router>
  );
};

export default App;
