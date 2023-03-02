import React from "react";
import { Link } from "react-router-dom";

import works1 from "../../assets/works1.png";
import works2 from "../../assets/works2.png";
import works3 from "../../assets/works3.png";

const Works = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold text-center ">HOW IT WORKS</h1>
      <h1 className="text-2xl font-bold text-yellow-500 text-center ">Simple Process</h1>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center  mt-10 mb-5 lg:ml-10 lg:mr-10 gap-2">
        <div className=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <Link href="#">
            <img src={works1} alt="Product" className="h-60 w-60 object-cover rounded-t-xl" />
            <div className="px-4 py-3 ">
              <p className="text-lg font-bold text-black truncate block capitalize">Your Order</p>
              <p className=" text-justify mt-4 mb-10 ">Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets.</p>
            </div>
          </Link>
        </div>

        <div className=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <img src={works2} alt="Product" className="h-60 w-60 object-cover rounded-t-xl" />
            <div className="px-4 py-3 ">
              <p className="text-lg font-bold text-black truncate block capitalize">Cash On Delivery</p>
              <p className=" text-justify mt-4 mb-10 ">Online food Delivery for hiring Food Foodota We appreciate your business, and we’ll do best to continue to give you the new kind.</p>
            </div>
          </Link>
        </div>

        <div className=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <img src={works3} alt="Product" className="h-60 w-60 object-cover rounded-t-xl" />
            <div className="px-4 py-3 ">
              <p className="text-lg font-bold text-black truncate block capitalize">Receive Order</p>
              <p className=" text-justify mt-4 mb-10 ">We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied .</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
