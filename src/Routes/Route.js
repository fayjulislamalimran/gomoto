import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.js";

import Blog from "../Pages/Blog/Blog.js";
import Create from "../Pages/Create/Create.js";
import Home from "../Pages/Home/Home.js";
import Login from "../Pages/Login/Login.js";
import Pizza from "../Pages/Pizza/Pizza.js";
import Product from "../Pages/Product/Product.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/burgere",
        element: <Product></Product>,
      },
      {
        path: "/pizza",
        element: <Pizza></Pizza>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/create",
        element: <Create></Create>,
      },
    ],
  },
]);
export default router;
