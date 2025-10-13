import React from "react";
import Heading from "./Heading";
import FruitsCat from "../assets/fruits-and-veggies.png";
import SeafoodCat from "../assets/meat-and-seafood.png";
import DairyCat from "../assets/dairy-and-eggs.png";
import Button from "./Button";

const categories = [
  {
    id: 1,
    title: "Fruits and Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat and Seafood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeafoodCat,
  },
];

function CategoryCard({ image, title, description }) {
  return (
    <div className="flex-1 basis-[300px]">
      {/* image */}
      <div className="w-full min-h-[30vh] relative -mb-10">
        <img src={image} alt={title} className="absolute bottom-0" />
      </div>

      {/* content */}
      <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
        <h3 className="text-zinc-800 text-3xl font-bold">{title}</h3>
        <p className="text-zinc-700 mt-3 mb-9">{description}</p>
        <Button content="See All" />
      </div>
    </div>
  );
}

function Category() {
  return (
    <section className="py-20 max-w-[1400px] mx-auto px-10">
      <Heading orange="Shop" normal=" By Category" />

      {/* category cards */}
      <div className="flex flex-wrap gap-10 md:mt-15">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} {...cat} />
        ))}
      </div>
    </section>
  );
}

export default Category;
