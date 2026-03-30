import React, { use, useState } from "react";
import ProductCards from "./ProductCards";
import SelectedCarts from "./SelectedCarts";


const Products = ({fetchPromise, carts, setCarts}) => {
    const [selectedType, setSelectedType] = useState('products')
    const [selectedTools, setSelectedTools] = useState([])
    // console.log(selectedTools, "selectedTools")
    const cardsData = use(fetchPromise)
   
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
        <button className={`btn  ${selectedType === "products"? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""} rounded-4xl`}
        onClick={()=>setSelectedType("products")}
        >
          Products
        </button>
        <button
        onClick={()=>setSelectedType('carts')} className={`btn  ${selectedType === "carts"? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : ""} rounded-4xl`}>
          Carts ({selectedTools.length})
        </button>
      </div>

      {/* <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      {
        cardsData.map(card=><ProductCards key={card.id} card={card}  ></ProductCards>
            
        )
      }
        </div> */}

        {selectedType ==="products" ? 
        <ProductCards carts={carts} setCarts={setCarts} cardsData={cardsData} setSelectedTools={setSelectedTools} selectedTools={selectedTools}></ProductCards> : 
        <SelectedCarts setCarts={setCarts} carts={carts} setSelectedTools={setSelectedTools} selectedTools={selectedTools}></SelectedCarts>}
    </div>
  );
};

export default Products;
