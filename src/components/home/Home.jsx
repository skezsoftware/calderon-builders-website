import React from "react";
import "./home.css";
import CarouselImages from "./CarouselImages";
import GetInTouch from "./GetInTouch";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <CarouselImages />
      <GetInTouch />
      <Testimonials />
    </>
  );
};

export default Home;
