// import React from 'react';

// const DoneButton = ({ onClick, children = 'Done', className = '' }) => {
//   return (
//     <button
//       onClick={onClick}
      // className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default DoneButton;
import React from "react";

type DoneButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode; // Allow any React element as children
};

const DoneButton: React.FC<DoneButtonProps> = ({ onClick, className, children }) => (
  <button onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex my-auto align-middle justify-center
 ${className}`}>
    {children}
  </button>
);

export default DoneButton;
