"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import { TextHoverEffect } from "../ui/text-hover-effect-demo";
export function TextHoverDemo() {
  const percentage = 100;
  return (
    <div
    style={{
             background: `conic-gradient(#3c5290 ${percentage}%, #ddd ${percentage}%)`,
            
           }}
     className="h-auto rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
    
    <div className="h-[40rem] flex items-center  justify-center">
       <TextHoverEffect
        text="BORHAN" />
     </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
