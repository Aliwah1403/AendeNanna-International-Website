import React from "react";
import Hero from "./Hero";
import WhyChooseUs from "./Benefits";
import Services from "./Services";
import Stats from "./Stats";
import Testimonials from "./Testimonials/user-testimonials";

const Homepage = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Benefits section */}
      <WhyChooseUs />

      {/* Our services section */}
      <Services />

      {/* Company stats section */}
      <Stats />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
};

export default Homepage;
