import React from "react";
// import { motion } from "framer-motion";
import logo from "../assets/brass-logo.png";


const Nav = () => {


  return (
      <nav className="flex items-center justify-between h-16 px-4 py-3 bg-black fixed w-full top-0 z-30">
        <div className="flex items-center justify-center gap-8 pl-6">
          <img src={logo} className="h-5 w-full" alt="Uber" />

          <ul className="text-white flex items-center justify-center gap-4">
            <li>
              <a href="x" className="nav-link">
                
                Industry
              </a>
            </li>
            <li>
              <a href="x" className="nav-link">
                
                Customers
              </a>
            </li>
            <li>
              <a href="x" className="nav-link">
                
                Product
              </a>
            </li>
            <li>
              <a href="x" className="nav-link">
                
                Company
              </a>
            </li>
          </ul>
        </div>

        <div className="pr-6 flex justify-center items-center">
          <ul className="text-white flex items-center justify-center gap-4">
            <li>
              <a href="x" className="nav-link">
                Resources
              </a>
            </li>
            <li>
              <a href="x" className="nav-link"> 
                Login
              </a>
            </li>
            <li>
              <a href="x" className=" bg-green-500 p-3 rounded-xl nav-link">
                Open an account
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Nav