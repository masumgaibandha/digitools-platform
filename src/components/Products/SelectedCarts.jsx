import React from "react";
import SelectedTool from "./SelectedTool";

const SelectedCarts = ({ selectedTools, setSelectedTools, setCarts, carts }) => {
      const totalPrice = selectedTools.reduce((total, tool) => total + tool.price, 0);

  return (
    <div>
      {selectedTools.map((tool, index) => (
        <SelectedTool
          key={index}
          tool={tool}
          selectedTools={selectedTools}
          setSelectedTools={setSelectedTools}
          setCarts={setCarts}
          carts={carts}
        ></SelectedTool>
        
      ))}
      <div className="flex justify-between items-center pr-3 text-2xl font-bold">
        <p>Total:</p>
        <span>{totalPrice}</span>
      </div>
      <div className="mt-5">
        <button className="btn w-full rounded-2xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default SelectedCarts;
