// "use client";
// import Image from "next/image";
// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useOutsideClick } from "./useOutsideClick";

// export function ExpandableCardDemo() {
//   const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
//   const ref = useRef<HTMLDivElement>(null);
//   const id = useId();

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (
//     <>
//       <div className="">
//         <AnimatePresence>
//           {active && typeof active === "object" && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/20 h-full w-full z-10"
//             />
//           )}
//         </AnimatePresence>
//         <AnimatePresence>
//           {active && typeof active === "object" ? (
//             <div className="fixed inset-0  grid place-items-center z-[100]">
//               <motion.button
//                 key={`button-${active.firstName}-${id}`}
//                 layout
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: {
//                     duration: 0.05,
//                   },
//                 }}
//                 className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//                 onClick={() => setActive(null)}
//               >
//                 X
//               </motion.button>
//               <motion.div
//                 layoutId={`card-${active.firstName}-${id}`}
//                 ref={ref}
//                 className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
//               >
//                 <div>
//                   <div className="flex justify-between items-start p-4">
//                     <div>
//                       <motion.h3
//                         layoutId={`title-${active.firstName}-${id}`}
//                         className="font-bold text-neutral-700 dark:text-neutral-200"
//                       >
//                         {active.firstName}
//                       </motion.h3>
//                       <motion.p
//                         layoutId={`description-${active.NationalID}-${id}`}
//                         className=" text-red-800 dark:text-neutral-400"
//                       >
//                         {active.NationalID}
//                       </motion.p>
//                     </div>
//                   </div>
//                   <div className="pt-4 relative px-4">
//                     <motion.div
//                       layout
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
//                     >
//                       {typeof active.content === "function"
//                         ? active.content()
//                         : active.content}
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           ) : null}
//         </AnimatePresence>
//       </div>

//       <div className="items-center text-center text-4xl mb-10 text-zinc-50">
//         <h1>Patient Register</h1>
//       </div>
//       <ul className="max-w-5xl mx-auto w-full gap-4 bg-opacity-50 border-white border-2 rounded-3xl shadow-lg shadow-slate-400 my-3">
//         {cards.map((card, index) => (
//           <motion.div
//             layoutId={`card-${card.firstName}-${id}`}
//             key={`card-${card.firstName}-${id}`}
//             onClick={() => setActive(card)}
//             className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-slate-500 rounded-xl cursor-pointer"
//           >
//             <div className="flex gap-4 flex-col md:flex-row">
//               <motion.div layoutId={`image-${card.firstName}-${id}`}>
//                 <div
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     backgroundColor: card.color,
//                     borderRadius: "8px",
//                   }}
//                 />
//               </motion.div>
//               <div>
//                 <motion.h3
//                   layoutId={`title-${card.firstName}-${id}`}
//                   className="font-medium text-white text-center md:text-left"
//                 >
//                   {card.firstName}
//                 </motion.h3>
//                 <motion.p
//                   layoutId={`description-${card.NationalID}-${id}`}
//                   className="text-slate-400 md:text-left"
//                 >
//                   {card.NationalID}
//                 </motion.p>
//               </div>
//             </div>
//             <motion.button
//               layoutId={`button-${card.firstName}-${id}`}
//               className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
//             >
//               {card.ctaText}
//             </motion.button>
//           </motion.div>
//         ))}
//       </ul>
//     </>
//   );
// }

// const cards = [
//   {
//     NationalID: "123456789123456789",
//     firstName: "John Doe",

//     ctaText: "Details",
//     color: "red",
//     content: () => {
//       return (
//         <div className="bo flex gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>Date: 01/01/2025</h4>
//             <h4>Incidence rate: 85%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>

//           {/* التحاليل الثانية */}
//           <div className="flex-1 pl-5">
//             <h4>Date: 10/4/2025</h4>
//             <h4>Incidence rate: 75%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>
//         </div>
//       );
//     }
//   },
//   {
//     NationalID: "123456789123456789",
//     firstName: "Rim chiba",

//     ctaText: "Details",
//     color: "red",
//     content: () => {
//       return (
//         <div className="bo flex gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>Date: 01/01/2025</h4>
//             <h4>Incidence rate: 85%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>

//           {/* التحاليل الثانية */}
//           <div className="flex-1 pl-5">
//             <h4>Date: 10/4/2025</h4>
//             <h4>Incidence rate: 75%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>
//         </div>
//       );
//     }
//   }, {
//     NationalID: "123456789123456789",
//     firstName: "Ayobe Ayoub",

//     ctaText: "Details",
//     color: "green",
//     content: () => {
//       return (
//         <div className="bo flex gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>Date: 01/01/2025</h4>
//             <h4>Incidence rate: 85%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>

//           {/* التحاليل الثانية */}
//           <div className="flex-1 pl-5">
//             <h4>Date: 10/4/2025</h4>
//             <h4>Incidence rate: 75%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>
//         </div>
//       );
//     }
//   }, {
//     NationalID: "123456789123456789",
//     firstName: "Saife Islam ",

//     ctaText: "Details",
//     color: "red",
//     content: () => {
//       return (
//         <div className="bo flex gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>Date: 01/01/2025</h4>
//             <h4>Incidence rate: 85%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>

//           {/* التحاليل الثانية */}
//           <div className="flex-1 pl-5">
//             <h4>Date: 10/4/2025</h4>
//             <h4>Incidence rate: 75%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>
//         </div>
//       );
//     }
//   },
//   {
//     NationalID: "123456789123456789",
//     firstName: "John Doe",

//     ctaText: "Details",
//     color: "orange",
//     content: () => {
//       return (
//         <div className="bo flex gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>Date: 01/01/2025</h4>
//             <h4>Incidence rate: 85%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>

//           {/* التحاليل الثانية */}
//           <div className="flex-1 pl-5">
//             <h4>Date: 10/4/2025</h4>
//             <h4>Incidence rate: 75%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>
//         </div>
//       );
//     }
//   }, {
//     NationalID: "123456789123456789",
//     firstName: "John Doe",

//     ctaText: "Details",
//     color: "green",
//     content: () => {
//       return (
//         <div className="bo flex gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>Date: 01/01/2025</h4>
//             <h4>Incidence rate: 85%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>

//           {/* التحاليل الثانية */}
//           <div className="flex-1 pl-5">
//             <h4>Date: 10/4/2025</h4>
//             <h4>Incidence rate: 75%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>
//         </div>
//       );
//     }
//   }, {
//     NationalID: "123456789123456789",
//     firstName: "John Doe",

//     ctaText: "Details",
//     color: "red",
//     content: () => {
//       return (
//         <div className="bo flex gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>Date: 01/01/2025</h4>
//             <h4>Incidence rate: 85%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>

//           {/* التحاليل الثانية */}
//           <div className="flex-1 pl-5">
//             <h4>Date: 10/4/2025</h4>
//             <h4>Incidence rate: 75%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>
//         </div>
//       );
//     }
//   }, {
//     NationalID: "123456789123456789",
//     firstName: "John Doe",

//     ctaText: "Details",
//     color: "green",
//     content: () => {
//       return (
//         <div className="bo flex gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>Date: 01/01/2025</h4>
//             <h4>Incidence rate: 20%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>

//           {/* التحاليل الثانية */}
//           <div className="flex-1 pl-5">
//             <h4>Date: 10/4/2025</h4>
//             <h4>Incidence rate: 75%</h4>
//             <h4>Sex: female</h4>
//             <h4>Date of birth: 15/05/1985</h4>
//             <h4>CP: asymptomatic</h4>
//             <h4>Trestbps: 130.5</h4>
//             <h4>Chol: 245.0</h4>
//             <h4>FBS: False</h4>
//             <h4>Restecg: hypertrophy</h4>
//             <h4>Thalach: 150.0</h4>
//             <h4>Exang: False</h4>
//             <h4>Oldpeak: 1.5</h4>
//             <h4>Slope: downsloping</h4>
//             <h4>CA: 1</h4>
//             <h4>Thal: fixed defect</h4>
//           </div>
//         </div>
//       );
//     }
//   }
  
// ];



// "use client";

// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useOutsideClick } from "./useOutsideClick";
// import { getUserHistoryByNationalId } from "@/lib/serverActions"; 

// export function ExpandableCardDemo() {
//   const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
//   const [userHistory, setUserHistory] = useState<any>(null); 
//   const ref = useRef<HTMLDivElement>(null);
//   const id = useId();

//   useEffect(() => {
//     if (active && typeof active === "object") {
//       const fetchUserHistory = async () => {
//         const historyData = await getUserHistoryByNationalId(active.NationalID);
//         setUserHistory(historyData);
//       };
//       fetchUserHistory();
//     }
//   }, [active]);

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (
//     <>
//       <div className="">
//         <AnimatePresence>
//           {active && typeof active === "object" && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/20 h-full w-full z-10"
//             />
//           )}
//         </AnimatePresence>
//         <AnimatePresence>
//           {active && typeof active === "object" ? (
//             <div className="fixed inset-0 grid place-items-center z-[100]">
//               <motion.button
//                 key={`button-${active.firstName}-${id}`}
//                 layout
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: {
//                     duration: 0.05,
//                   },
//                 }}
//                 className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//                 onClick={() => setActive(null)}
//               >
//                 X
//               </motion.button>
//               <motion.div
//                 layoutId={`card-${active.firstName}-${id}`}
//                 ref={ref}
//                 className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
//               >
//                 <div>
//                   <div className="flex justify-between items-start p-4">
//                     <div>
//                       <motion.h3
//                         layoutId={`title-${active.firstName}-${id}`}
//                         className="font-bold text-neutral-700 dark:text-neutral-200"
//                       >
//                         {active.firstName} {active.lastName}
//                       </motion.h3>
//                       <motion.p
//                         layoutId={`description-${active.NationalID}-${id}`}
//                         className="text-red-800 dark:text-neutral-400"
//                       >
//                         {active.NationalID}
//                       </motion.p>
//                     </div>
//                   </div>
//                   <div className="pt-4 relative px-4">
//                     <motion.div
//                       layout
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
//                     >
//                       {userHistory && userHistory.examData && Array.isArray(userHistory.examData) ? (
//                         <div>
//                           {userHistory.examData.map((exam, index) => (
//                             <div key={index} className="mb-4">
//                               <h4>Examination Type: {exam.examinations_type}</h4>
//                               <p>Examination Data: {JSON.stringify(exam.examination_data)}</p> {/* هنا تعرض البيانات بالكامل */}
//                             </div>
//                           ))}
//                         </div>
//                       ) : (
//                         <p>No history available</p>
//                       )}
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           ) : null}
//         </AnimatePresence>
//       </div>

//       <div className="items-center text-center text-4xl mb-10 text-zinc-50">
//         <h1>Patient Register</h1>
//       </div>
//       <ul className="max-w-5xl mx-auto w-full gap-4 bg-opacity-50 border-white border-2 rounded-3xl shadow-lg shadow-slate-400 my-3">
//         {cards.map((card, index) => (
//           <motion.div
//             layoutId={`card-${card.firstName}-${id}`}
//             key={`card-${card.firstName}-${id}`}
//             onClick={() => setActive(card)}
//             className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-slate-500 rounded-xl cursor-pointer"
//           >
//             <div className="flex gap-4 flex-col md:flex-row">
//               <motion.div layoutId={`image-${card.firstName}-${id}`}>
//                 <div
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     backgroundColor: card.color,
//                     borderRadius: "8px",
//                   }}
//                 />
//               </motion.div>
//               <div>
//                 <motion.h3
//                   layoutId={`title-${card.firstName}-${id}`}
//                   className="font-medium text-white text-center md:text-left"
//                 >
//                   {card.firstName}
//                 </motion.h3>
//                 <motion.p
//                   layoutId={`description-${card.NationalID}-${id}`}
//                   className="text-slate-400 md:text-left"
//                 >
//                   {card.NationalID}
//                 </motion.p>
//               </div>
//             </div>
//             <motion.button
//               layoutId={`button-${card.firstName}-${id}`}
//               className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
//             >
//               {card.ctaText}
//             </motion.button>
//           </motion.div>
//         ))}
//       </ul>
//     </>
//   );
// }

// const cards = [
//   {
//     NationalID: "",
//     firstName: "",
//     ctaText: "Details",
//     color: "red",
//     content: (userHistory: { [key: string]: any }) => {
//       return (
//         <div className="bo flex flex-wrap gap-5">
//           <div className="flex-1 border-r-2 border-gray-400 pr-5">
//             <h4>National ID: {userHistory.nationalId}</h4>
//             <h4>First Name: {userHistory.firstName} {userHistory.lastName}</h4>
//             <h4>Date: {userHistory.date}</h4>
//             <h4>Incidence rate: {userHistory.incidenceRate}</h4>
//             <h4>Birth Date: {userHistory.BirthDate}</h4>
//             <h4>Sex: {userHistory.sex}</h4>
//             <h4>CP: {userHistory.cp}</h4>
//             <h4>Trestbps: {userHistory.trestbps}</h4>
//             <h4>Chol: {userHistory.chol}</h4>
//             <h4>FBS: {userHistory.fbs ? "True" : "False"}</h4>
//             <h4>Restecg: {userHistory.restecg}</h4>
//             <h4>Thalach: {userHistory.thalach}</h4>
//             <h4>Exang: {userHistory.exang ? "True" : "False"}</h4>
//             <h4>Oldpeak: {userHistory.oldpeak}</h4>
//             <h4>Slope: {userHistory.slope}</h4>
//             <h4>CA: {userHistory.ca}</h4>
//             <h4>Thal: {userHistory.thal}</h4>
//           </div>
//         </div>
//       );
//     }
//   }
// ];







"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./useOutsideClick";
import { getUserHistory } from "@/lib/serverActions";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const [userHistory, setUserHistory] = useState<any>(null); 
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (active && typeof active === "object") {
      const fetchUserHistory = async () => {
        const historyData = await getUserHistory();
        setUserHistory(historyData);
      };
      fetchUserHistory();
    }
  }, [active]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="">
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.firstName}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                X
              </motion.button>
              <motion.div
                layoutId={`card-${active.firstName}-${id}`}
                ref={ref}
                className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.firstName}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.firstName} {active.lastName}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.NationalID}-${id}`}
                        className="text-red-800 dark:text-neutral-400"
                      >
                        {active.NationalID}
                      </motion.p>
                    </div>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {userHistory && userHistory.examData && Array.isArray(userHistory.examData) ? (
                        <div>
                          {userHistory.examData.map((exam, index) => (
                            <div key={index} className="mb-4">
                              <h4>Examination Type: {exam.examinations_type}</h4>
                              <p>Examination Data: {JSON.stringify(exam.examination_data)}</p> {/* هنا تعرض البيانات بالكامل */}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No history available</p>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="items-center text-center text-4xl mb-10 text-zinc-50">
        <h1>Patient Register</h1>
      </div>
      <ul className="max-w-5xl mx-auto w-full gap-4 bg-opacity-50 border-white border-2 rounded-3xl shadow-lg shadow-slate-400 my-3">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.firstName}-${id}`}
            key={`card-${card.firstName}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-slate-500 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.firstName}-${id}`} />
              <div>
                <motion.h3
                  layoutId={`title-${card.firstName}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {card.firstName}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.NationalID}-${id}`}
                  className="text-slate-400 md:text-left"
                >
                  {card.NationalID}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.firstName}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    NationalID: "", 
    firstName: "",
    ctaText: "Details",
    color: "red",
    content: (userHistory: { [key: string]: any }) => {
      return (
        <div className="bo flex flex-wrap gap-5">
          <div className="flex-1 border-r-2 border-gray-400 pr-5">
            <h4>National ID: </h4>
            <h4>First Name: </h4>
            <h4>Date: </h4>
            <h4>Incidence rate: </h4>
            <h4>Birth Date: </h4>
            <h4>Sex: </h4>
            <h4>CP: </h4>
            <h4>Trestbps: </h4>
            <h4>Chol: </h4>
            <h4>FBS: </h4>
            <h4>Restecg: </h4>
            <h4>Thalach: </h4>
            <h4>Exang: </h4>
            <h4>Oldpeak: </h4>
            <h4>Slope: </h4>
            <h4>CA: </h4>
            <h4>Thal: </h4>
          </div>
        </div>
      );
    }
  }
];
