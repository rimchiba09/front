"use client";
import React from "react";
import Image from "next/image";
import LOGO from "../../public/assist/logo.png";
import SplitButton from "./SplitButton"
const Navbar = () => {
  return (
    
      <nav
        className="navbar z-50 bg-transparent  "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand ">
          <a className="flex align-middle my-auto ">
            <Image
              src={LOGO}
              width="112"
              height="312"
              alt="logo"
              className="w-[7rem] h-[6rem] max-md:w-[4rem] max-md:h-[4rem] my-auto "
            />
            <p className="font-bold text-3xl max-md:text-xl flex align-middle my-auto bg-gradient-to-r from-[#0e40be] via-[#0055ff] to-[#5984f3] bg-clip-text text-transparent ">
              BURHAN
            </p>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div>
          <div>
          <SplitButton/>
          </div>
      

        </div>
      </nav>
  );
};

export default Navbar;
