import React from "react";
import Cards from "./Cards";

const Products = () => {
  return (
    <div className="w-7xl mx-auto">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold"> Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center items-center py-5">
        <button className=" btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-4xl">
          Products
        </button>
        <button className=" btn  rounded-4xl">
          Carts (2)
        </button>
      </div>
        <Cards></Cards>
    </div>
  );
};

export default Products;
