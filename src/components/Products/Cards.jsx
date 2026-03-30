import React from 'react';
import badgeImg from "../../assets/products/design-tool.png"
import Features from './Features';

const Cards = ({card}) => {
    const {tag, name, description, price, features} = card;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm border border-gray-200 rounded-2xl">
        <div className="card-body">
          <div className="flex justify-end">
            <span className="badge badge-md bg-[#FEF3C6] ">{tag}</span>
          </div>
          <div>
            <img src={badgeImg} alt="" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-[#627382]">{description}</p>
          </div>
          <div>
            <span className="text-xl">${price}/Mo</span>
          </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {
              features.map((feature, index) => <Features key={index} feature={feature}></Features>)
          }
        </ul>
          <div className="mt-6">
            <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-4xl w-full">Buy Now</button>
          </div>
        </div>
     

    </div>
        </div>
    );
};

export default Cards;