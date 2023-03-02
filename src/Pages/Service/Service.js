import React from "react";
import Item1 from "../../assets/item-1.jpg";
import Item2 from "../../assets/item-2.jpg";
import Item3 from "../../assets/item-3.jpg";
import Item4 from "../../assets/item-4.jpg";

const Service = () => {
  return (
    <div>
      <div className="container mx-auto mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex justify-center  border-2 border-gray-300 rounded-xl p-6 ">
            <div className="card card-compact  ">
              <figure>
                <img src={Item1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Cheeseburger Salad!</h3>

                <h1 className=" text-2xl font-bold">$11.49</h1>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-yellow-500 text-black hover:bg-white">Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  border-2 border-gray-300 rounded-xl p-6 ">
            <div className="card card-compact  ">
              <figure>
                <img src={Item2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Royal Cheeseburger!</h3>

                <h1 className=" text-2xl font-bold">$10</h1>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-yellow-500 text-black hover:bg-white">Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  border-2 border-gray-300 rounded-xl p-6 ">
            <div className="card card-compact  ">
              <figure>
                <img src={Item3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Black Gambugrer!</h3>

                <h1 className=" text-2xl font-bold">$13.49</h1>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-yellow-500 text-black hover:bg-white">Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  border-2 border-gray-300 rounded-xl p-6 ">
            <div className="card card-compact  ">
              <figure>
                <img src={Item4} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Classic Bacon!</h3>

                <h1 className=" text-2xl font-bold">$10.49</h1>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-yellow-500 text-black hover:bg-white">Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <button className="btn btn-primary bg-black mb-5 px-5 hover:bg-white hover:text-black ">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
