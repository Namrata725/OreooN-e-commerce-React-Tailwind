import React from "react";
import Heading from "./Heading";
import { IoMdHeart } from "react-icons/io";
import { FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../assets/basket-full-vegetables.png";

const values = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <IoMdHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];

function Values() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading orange="Our" normal="Values" />

        <div className="flex flex-col md:flex-row gap-10 mt-15 items-center justify-between">
          {/* Left two values */}
          <div className="flex flex-col gap-10">
            {values.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 md:flex-row-reverse md:text-right"
              >
                <span className="bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 text-3xl text-white rounded-full flex items-center justify-center">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-zinc-800 font-bold text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="hidden lg:flex w-1/2 justify-center">
            <img src={Basket} alt="Basket of vegetables" />
          </div>

          {/* Right two values */}
          <div className="flex flex-col gap-10">
            {values.slice(2).map((item) => (
              <div key={item.id} className="flex items-center gap-5">
                <span className="bg-gradient-to-b from-orange-400 to-orange-500 size-15 text-3xl text-white rounded-full flex items-center justify-center">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-zinc-800 font-bold text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 mt-2">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
