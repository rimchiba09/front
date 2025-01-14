"use client";
import React, { useEffect, useState } from "react";
import Advice from "../../public/assist/img3.png";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import Navbar from "@/components/Home/Navbar";
import 'aos/dist/aos.css';
import AOS from 'aos';

const AdvicePage = () => {
  const [value, setValue] = useState(0);

  const [advice, setAdvice] = useState<{ title: string; points: string[] }>({
    title: "",
    points: [],
  });


  useEffect(() => {
    AOS.init();
  }, []);


  const getAdvice = (percentage: number): { title: string; points: string[] } => {
    if (percentage < 30) {
      return {
        title: "Your heart is beating with life",
        points: [
          "Maintain an active lifestyle.",
          "Regular exercise, such as walking or swimming, is beneficial.",
          "Eat a balanced and healthy diet that includes vegetables and fruits.",
          "Avoid fast food."
        ],
      };
    } else if (percentage >= 30 && percentage < 60) {
      return {
        title: "Your health is in the balance",
        points: [
          "Reduce the intake of saturated fats and foods high in sugars.",
          "Improve your diet by including fiber-rich foods like vegetables and fruits.",
          "Engage in regular physical activity to enhance overall health.",
        ],
      };
    } else if (percentage >= 60 && percentage < 90) {
      return {
        title: "Your life is a top priority",
        points: [
          "Consult a specialist for a comprehensive medical check-up.",
          "Engage in regular physical activities like brisk walking or aerobic exercises.",
          "Reduce stress to improve heart health.",
          "Eat foods rich in healthy fatty acids.",
        ],
      };
    } else {
      return {
        title: "Urgent appeal for your health",
        points: [
          "Consult a specialist immediately for thorough medical examinations.",
          "Start a treatment plan as advised by your doctor.",
          "Maintain a healthy lifestyle by quitting smoking and reducing alcohol intake.",
          "Avoid fatty foods.",
          "Consult your doctor for medications or strategies to improve your condition.",
        ],
      };
    }
  };

  useEffect(() => {
    const resultFromStorage = localStorage.getItem("predictionResult");

    if (resultFromStorage) {
      const result = parseInt(resultFromStorage);
      setValue(result);
      setAdvice(getAdvice(result));
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

  const percentage = 100;
  return (
    <div className="w-full h-screen px-2 bg-[#3c5290] overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />
      <div className="w-full mb-3">
        <Navbar />
      </div>
      <div className="flex h-[calc(90vh-120px)]"
      >
        <div className=" w-1/2">
          <img
            src={Advice.src}
            alt="Advice"
            className=" ml-12 object-cover"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>



        <div
          className="flex items-center justify-center my-auto mr-6 w-1/2 h-96 p-6 text-blue-100"
          style={{
            background: `conic-gradient(#3c5290 ${percentage}%, #ddd ${percentage}%)`,
            boxShadow: "0 4px 8px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
          }}
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <div
            className="text-xl font-semibold p-4 rounded-lg leading-relaxed"
            style={{ lineHeight: "1.8" }}
          >
            <h2
              className="text-2xl font-bold mb-5 text-center text-blue-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {advice.title}
            </h2>
            <ul className="pl-5">
              {advice.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center mb-2"
                  data-aos="fade-up"
                  data-aos-delay={1000 + index * 500}
                  data-aos-duration="1500"
                >
                  <span className="mr-2">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default AdvicePage;
