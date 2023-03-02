import React from "react";
import aboutLogo from "../../assets/about.png";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-yellow-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={aboutLogo} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="w-6/12">
            <h1 className="text-5xl font-bold">
              <small className="text-5xl font-bold text-white">Enjoy express food</small> <br />
              Delivery with Gomoto
            </h1>

            <p className="py-6 text-justify">Rdering food online needn't be a hassle when you do it with gomoto. It's incredibly straightforward to find takeaway menus with fast restaurants delivery as standard. Simply head to gomoto, enter your location, then take your pick from all restaurants delivering to you. </p>
            <button className="btn btn-primary bg-black hover:bg-white hover:text-black">Get Gomoto</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
