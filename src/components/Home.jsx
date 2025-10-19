import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Category from "./Category";
import Values from "./Values";
import Products from "./Products";
import Discount from "./Discount";
import Process from "./Process";
import Testimonials from "./Testimonials";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  );
}

export default Home;
