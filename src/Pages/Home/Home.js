import React from "react";
import About from "../About/About.js";

import Extra from "../Extra/Extra.js";
import Hero from "../Hero/Hero.js";
import Order from "../Order/Order.js";
import Pizza from "../Pizza/Pizza.js";
import Product from "../Product/Product.js";
import Service from "../Service/Service.js";
import Team from "../Team/Team.js";

import Works from "../Works/Works.js";

const Home = () => {
  return (
    <div>
      <Hero></Hero>

      <Extra></Extra>
      <Pizza></Pizza>
      <Service></Service>
      <About></About>
      <Product></Product>
      <Order></Order>
      <Works></Works>
      <Team></Team>
    </div>
  );
};

export default Home;
