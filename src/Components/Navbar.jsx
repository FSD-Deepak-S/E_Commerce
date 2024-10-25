import React from "react";
import { Link, useNavigation } from "react-router-dom";

const Navbar = ({cart}) => {
  // useNavigation = navi

  return (
    <div className="w-full fixed z-20 bg-white">

      {/* <nav className="flex justify-between items-center p-5 fixed w-full z-20 top-0 start-0 border-b mx-auto bg-white"> */}
      <nav className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between m-10 ">
        <div>
        <span className="border-2 p-3 border-black  self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-red-500">E</span> Commerce
            </span>
        </div>
        <div><Link to='/' className="text-blue-500 font-bold">Home</Link></div>
        <div><Link to='/cart'
        className={cart.length === 0 ? ("text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"):
            ("text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800") }
        >Cart {cart.length}</Link></div>
      </nav>
    </div>
  );
};

export default Navbar;
