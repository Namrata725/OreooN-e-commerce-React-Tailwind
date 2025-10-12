import React from "react";
import Grocery from "../../src/assets/grocery.png";
import Button from "./Button";

function Hero() {
  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col-reverse items-center justify-center pt-25">
        {/* hero content */}
        <div className="flex-1">
          <span className="bg-gradient-to-b from-red-600 to-orange-400 bg-clip-text text-transparent text-xl font-bold  py-5">
            Export Best Qaulity
          </span>

          <h1 className="md:text-7xl/20 text-4xl/12 font-bold mt-4">
            Testy Organic <span className="text-orange-500">Fruits</span> &
            <span className="text-orange-500"> Veggies</span> <br /> In Your
            City
          </h1>
          <p className="text-zinc-600 text-lg max-w-[530] mt-5 mb-10">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>

        {/* hero image */}

        <div className="flex-1">
          <img src={Grocery} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
