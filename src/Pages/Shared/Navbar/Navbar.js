import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/" className="text-xl text-white">
          Home
        </Link>
      </li>

      <li>
        <Link to="/burgere" className="text-xl text-white">
          Burgere
        </Link>
      </li>
      <li>
        <Link to="/pizza" className="text-xl text-white">
          Pizza
        </Link>
      </li>
      <li>
        <Link to="/blog" className="text-xl text-white">
          Blog
        </Link>
      </li>

      <li>
        <Link to="/login" className="text-xl text-white">
          Login
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-black flex justify-between ">
      <div className="navbar-start pl-5 ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="Logo" srcset="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex pr-10">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
