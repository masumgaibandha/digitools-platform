import React from "react";
import bannerImg from "../../assets/banner.png";
import playImg from "../../assets/Play.png";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-between items-center max-w-7xl mx-auto   gap-6">
        <div className="">
          <div className="space-y-3">
            <p className="font-semibold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
            <h1 className="text-7xl font-extrabold text-[#101727]">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-[18px] text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br></br>
              software—all in one place. Start creating faster today. Explore
              Products
            </p>
          </div>
          <div className="py-3">
            <button className=" btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-4xl">
              Explore Products
            </button>
            <button className="btn rounded-4xl text-[#9514fa] ml-3 border-2 border-[#4f39f6]">
              <img src={playImg} alt="" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="pl-6 ">
          <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-25 my-14 flex  justify-around items-center">
        <div className="text-white">
          <span className="text-6xl font-extrabold">50K+</span>
          <p className="text-2xl font-semibold">Active Users</p>
        </div>

        <div class="w-px h-14 bg-gray-300"></div>

        <div className="text-white">
          <span className="text-6xl font-extrabold">200+</span>
          <p className="text-2xl font-semibold">Premium Tools</p>
        </div>
        <div className="w-px h-14 bg-gray-300"></div>
        <div className="text-white">
          <span className="text-6xl font-extrabold">4.9</span>
          <p className="text-2xl font-semibold">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
