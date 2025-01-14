import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import {Icon } from "@/components/ui/evervault-card";
import { welcome_section_words } from "@/utils/constant";
import { Arrow_Right } from "@/utils/SVGs";
import Navbar from '@/components/Home/Navbar';

import "./globals.css"
const welcome = () => {
  return (
      <>

      <div className="welcome w-full h-[100vh] bg-[#182b53]  overflow-hidden">
          <Navbar/>
          <div className="flex justify-center m-auto">
              <div
                  className="lg:flex max-lg:flex-col-reverse  my-auto max-sm:justify-center max-sm:mx-auto justify-around align-middle py-12 lg:m-12 sm:my-0 ">
                  <div className="lg:h-1/4 sm:h-[11rem] flex flex-col px-4 mt-12 max-sm:mb-12">
                      <h1 className="lg:text-xl sm:text-xl max-sm:mx-auto max-md:text-center font-semibold text-neutral-400 mb-5 leading-relaxed">You have
                          successfully signed up.</h1>
                      <div
                          className="lg:text-4xl sm:text-3xl max-lg:text-center lg:mx-auto font-semibold text-neutral-100 leading-relaxed">
                          Welcome To <span className="text-lightBlue ">BURHAN</span>{" "}
                          Platform <br/>
                          Where <FlipWords words={welcome_section_words}/> <br/>
                      </div>

                      <a href="/section" className="flex justify-center">
                          <button
                              className="px-4 py-2 max-sm:px-2 max-sm:py-1 md:mx-auto rounded-full bg-gradient-to-b from-[#6a6884] to-[#3f3d56] text-white max-sm:text-sm max-sm:font-normal text-lg font-semibold focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 w-fit mt-10 shadow-xl max-sm:mx-auto ">
                              Discover New
                          </button>
                      </a>

                  </div>
                  <img
                      src="/assist/img5.svg"
                      width={500}
                      height={500}
                      alt="medicine"
                      className="max-lg:w-3/4 max-md:w-1/2 md:mt-5 max-lg:mx-auto "
                  />
              </div>
          </div>
          </div>
      </>
  );
};

export default welcome;
