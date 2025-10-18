import React, { useState } from "react";
import Heading from "./Heading";
import ProductList from "./ProductList";
import products from "./ProductList";
import ProductCards from "./ProductCards";
import Button from "./Button";
function Products() {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];

  const [activeTab, setActiveTab] = useState("All");

  let filteredItem =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((items) => items.category === activeTab);
  const renderCards = filteredItem.slice(0, 8).map((product) => {
    return (
      <ProductCards
        image={product.image}
        title={product.name}
        price={product.price}
      />
    );
  });
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading orange="Our" normal="Products" />

      {/* tabs */}

      <div className="flex flex-wrap gap-3 justify-center mt-10">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={` px-5 py-2 text-lg rounded-lg ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-100"
              }`}
              onClick={() => {
                setActiveTab(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* products-listing */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-20">
        {renderCards}
      </div>

      <div className="mt-15 w-fit mx-auto">
        <Button content="view All" />
      </div>
    </section>
  );
}

export default Products;
