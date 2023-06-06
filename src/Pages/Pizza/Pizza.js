import React from "react";
import pizza from "../../assets/pizza.png";

const Pizza = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-yellow-500">
        <div className="hero-content flex-col lg:flex-row">
          <img data-aos="fade-right" src={pizza} className="w-6/12 " alt="" />
          <div>
            <h1 className="text-5xl font-bold  ">Order food online from the best restaurants in Sylhet</h1>
            <p className="py-6 text-justify">If you're tired of second-rate food takeaway menus, gomoto is on hand to renew your appetite for ordering in. Our team have put together a premier selection of restaurant menus from some of the best eateries in town, with something to cater to every palate and preference. You'll find quality menus stacked with delicious dishes from the likes of Premium Sweets, Just Juice, Cafe Appeliano and many more.</p>
            <button className="btn btn-primary bg-black hover:bg-white hover:text-black">Get Pizza</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
