import React from "react";

interface DashedCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashedCard({ children, className = "" }: DashedCardProps) {
  return (
    <div
      className={`w-full bg-[#FFEABD] p-4 rounded-2xl border-2 border-dashed border-[#A47728] ${className}`}
    >
      {children}
    </div>
  );
}
