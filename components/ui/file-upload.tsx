import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";
import { IconUpload } from "@tabler/icons-react";

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    onChange && onChange(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
  });

  return (
    <div className=" w-28  ">
      <div
      {...getRootProps()}
      className=" w-full p-4 text-center border border-dashed border-gray-400 rounded-lg cursor-pointer"
    >
      <input
        ref={fileInputRef}
        type="file"
        onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
        className="hidden"
      />
      <div
        onClick={handleClick}
        className="flex flex-col items-center justify-center gap-1"
      >
       
        <IconUpload className="w-5 h-5 text-gray-600 opacity-80" />
       
      </div>
    </div>
    </div>
   
  );
};
