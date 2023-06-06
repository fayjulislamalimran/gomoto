import React from "react";

import order from "../../assets/order.png";

const Order = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={order} className="w-6/12 " alt="" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />
          <div>
            <h1 className="text-4xl font-bold  ">
              Get Your Order 24/7 <br />
              Right At Your Doorsteps
            </h1>
            <button className="btn btn-primary bg-black hover:bg-white hover:text-black mt-9">Order Food</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
