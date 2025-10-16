import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "./Button";
function ProductCards({ image, title, price }) {
  return (
    <div className="bg-zinc-100 p-5 rotate-xl ">
      {/* cards-icons */}
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-4 py-3 text-xl rounded-lg">
          <FaPlus />
        </button>
      </div>
      {/* card-image */}
      <div className="w-full h-50 ">
        <img src={image} className="h-full w-full object-contain" />
      </div>
      {/* card-content */}
      <div className="text-center ">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
}

export default ProductCards;
