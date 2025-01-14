'use client';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Navbar from '@/components/Home/Navbar';
import { motion } from "framer-motion";  // Use `motion` instead of `div`
import {projects} from "@/utils/constant"

const Section = () => {
    return (
        <div className="h-full w-full bg-blue dark:bg-[#1e2948] relative p-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />

            <div className="ml-9">
                <Navbar />
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
};



export default Section;
