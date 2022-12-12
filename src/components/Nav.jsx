import React from "react";
// import { motion } from "framer-motion";
import logo from "../assets/brass-logo.png";


const Nav = () => {


  return (
    <nav className="h-16 px-4 pt-5 bg-black fixed w-full top-0 z-30">
      <div className="flex items-center justify-center gap-8 pl-6 w-full">
        <div>
          <a href="h">
            <img src={logo} className="h-5 w-20" alt="Brass" />
          </a>
        </div>

        <div className="none1 text-white flex items-center justify-between w-11/12">
          <ul className="flex items-center justify-center gap-3">
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
      </div>
    </nav>
  );
};

export default Nav