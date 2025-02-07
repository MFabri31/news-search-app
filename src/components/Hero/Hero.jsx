import React from "react";
import "./Hero.css";

const Hero = ({ children }) => {
  return (
    <section className="hero py-5 d-flex flex-column justify-content-center align-items-center gap-4">
      {children}
    </section>
  );
};

export default Hero;
