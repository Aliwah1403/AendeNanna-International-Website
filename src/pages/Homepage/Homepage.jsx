import React from "react";
import Hero from "./Hero";
import WhyChooseUs from "./Benefits";
import Services from "./Services";

const Homepage = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Benefits section */}
      <WhyChooseUs />

      {/* Our services section */}
      <Services />
    </>
  );
};

export default Homepage;
