
'use client'

import { ExpandableCardDemo } from "@/components/PatientRecord/ExpandableCardDemo";
import Navbar from "@/components/Home/Navbar";

const PatientRecord = () => {
  return (
    <>
      <div className="w-full min-h-screen dark:bg-[#1e2948]  overflow-hidden">
        <Navbar /> 
              <div className="w-full  mx-auto ">
                <ExpandableCardDemo />
              </div>
      </div>
    </>
  );
};

export default PatientRecord;