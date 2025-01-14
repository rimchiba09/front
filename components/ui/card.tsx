import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`border rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardDescription: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-gray-600 ${className}`}>
      {children}
    </p>
  );
};

