import React from "react";

import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";

const Extra = () => {
  return (
    <div>
      <div className="container mx-auto mt-10 mb-10">
        <h1 className="text-3xl font-bold  text-center mb-10"> Restaurant</h1>
        <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex justify-center  rounded-xl  ">
            <img src={food1} alt="" srcset="" />
          </div>
          <div className="flex justify-center  rounded-xl  ">
            <img src={food2} alt="" srcset="" />
          </div>
          <div className="flex justify-center  rounded-xl">
            <img src={food3} alt="" srcset="" />
          </div>
          <div className="flex justify-center  rounded-xl ">
            <img src={food4} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
