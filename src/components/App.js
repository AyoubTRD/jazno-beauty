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
import Footer from "./Footer";

import Success from "./Success";
import PrivacyPolicy from "./mini/PrivacyPolicy";
import ReturnPolicy from "./mini/ReturnPolicy";

import AnimatedSwitch from "./mini/AnimatedSwitch";
import AnimatedRoute from "./mini/AnimatedRoute";
import { Router } from "react-router-dom";
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
    <Footer />
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
        <AnimatedRoute path="/success/:price" exact component={Success} />
      </AnimatedSwitch>
      <AnimatedSwitch animationClassName="fade" animationTimeout={800}>
        <AnimatedRoute path="/privacy-policy" exact component={PrivacyPolicy} />
        <AnimatedRoute path="/return-policy" exact component={ReturnPolicy} />
      </AnimatedSwitch>
    </Router>
  );
};

export default App;
