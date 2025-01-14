import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image"; // <-- Import StaticImageData

// HoverImage component for rendering hover effect on images
const HoverImage = ({ image, alt }: { image: StaticImageData; alt: string }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute inset-0 h-full w-full rounded-3xl overflow-hidden"
        layoutId="hoverBackground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.15 } }}
        exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image src={image} alt={alt} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string; // Add unique ID field
    title: string;
    description: string;
    link: string;
    image: StaticImageData;  // Proper typing for StaticImageData
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item.id} // Use the unique `id` here instead of link
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Display "Soon" label except for "Cardiovascular Diseases" */}
          {item.title !== "Cardiovascular Diseases" && (
            <div className="absolute top-4 right-4 z-30">
              <p className="text-white text-lg bg-red-600 px-3 py-1 rounded-lg">
                Soon
              </p>
            </div>
          )}

          {/* Render hover effect for the image */}
          {hoveredIndex === idx && <HoverImage image={item.image} alt={item.title} />}

          {/* Card component */}
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

// Card Component
export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden shadow-sm shadow-slate-400 hover:shadow-none border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// CardTitle Component
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 relative z-10 group-hover:text-white transition-colors duration-300", className)}>
      {children}
    </h4>
  );
};

// CardDescription Component
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm relative z-10 group-hover:text-zinc-200 transition-colors duration-300", className)}>
      {children}
    </p>
  );
};
