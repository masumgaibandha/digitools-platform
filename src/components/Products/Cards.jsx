import React from "react";
import badgeImg from "../../assets/products/design-tool.png"

const Cards = () => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      <div className="card w-96 bg-base-100 shadow-sm border border-gray-200 rounded-2xl">
        <div className="card-body">
          <div className="flex justify-end">
            <span className="badge badge-xs bg-[#FEF3C6] ">Best Seller</span>
          </div>
          <div>
            <img src={badgeImg} alt="" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">AI Writing Pro</h2>
            <p className="text-[#627382]">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
          </div>
          <div>
            <span className="text-xl">$29/Mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
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
