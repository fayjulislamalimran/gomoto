import React from "react";
import Baner from "../../assets/slider.png";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen text-white bg-black ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Baner} className="w-6/12 " alt="" />
          <div className="w-6/12">
            <h1 className="text-5xl font-bold text-yellow-500">Fast food delivery in Sylhet</h1>
            <br />
            <p className="w-50 text-justify">Whether you're a long-time native or new to the city, you've plenty to get excited in Sylhet when it comes to all things food. Sylet is a thriving metropolitan hub, with plenty to offer the discerning diner. From quick and easy street food to more refined restaurant dishes, there's no shortage of options when it comes to quashing an appetite.</p> <br />
            <button className="btn btn-primary bg-yellow-500 text-black hover:bg-white">Find your favorites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
