import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Category from "./Category";
import Values from "./Values";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
    </div>
  );
}

export default Home;
