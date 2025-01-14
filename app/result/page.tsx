"use client";
import React, { useEffect, useState } from "react";
import medical from "../../public/assist/result.png";
import { DoneIcon } from "@/utils/SVGs";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import DoneButton from "@/components/Result/DoneButton";
import Navbar from "@/components/Home/Navbar";

const Results = () => {
  const [value, setValue] = useState(0);
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  const handleDoneClick = () => {
    setIsTaskComplete(true);
  };

  useEffect(() => {
    const resultFromStorage = localStorage.getItem("predictionResult");

    if (resultFromStorage) {
      const result = parseInt(resultFromStorage);
      setValue(result);
    } else {
      let max = Math.floor(Math.random() * 100);
      const handleIncrement = (prev: number) => {
        if (prev === max) {
          return max;
        }
        if (prev < max - (max % 10)) {
          return 10;
        }
        return Math.floor(prev + 1);
      };
      setValue(handleIncrement);
      const interval = setInterval(() => setValue(handleIncrement), 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-full h-screen px-2 bg-[#3c5290]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />
      <div className="w-full mb-3">
        <Navbar />
      </div>
      <div className="flex justify-center max-sm:flex-col">
        <div className="mx-auto">
          <h1 className="font-bold text-6xl max-sm:text-4xl text-white p-3 mx-auto text-center">
            The Result{" "}
          </h1>
          <div className="mx-auto flex flex-col justify-center gap-9">
            <h2 className="font-semibold text-2xl max-sm:text-lg max-sm:text-center text-blue-100 p-3 mx-auto ">
              The patient's risk of heart disease :
            </h2>

            <div className="mx-auto flex justify-center">
              <div className="relative">
                <AnimatedCircularProgressBar
                  max={100}
                  min={0}
                  value={Math.floor(value)}
                  gaugePrimaryColor="#ff6666"
                  gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                />
                <div className="absolute inset-0 flex items-center justify-center font-semibold text-xl text-white">
                  {Math.floor(value)}%
                </div>
              </div>
            </div>

          </div>

          <div className="mx-auto flex justify-center mt-16">
            <a href="/advicePage" className="mx-auto">
              <DoneButton
                onClick={handleDoneClick}
                className="mt-4 flex my-auto align-middle justify-center"
              >
                advice
              </DoneButton>
            </a>
          </div>
        </div>
        <img
          src={medical.src}
          alt="medical"
          className="w-2/5 h-2/5 max-sm:hidden"
        />
      </div>
    </div>
  );
};

export default Results;
