import Image from "next/image";
import React from "react";

// import facebook from "../../../public/images/facebook.png";

export default function Overview({
  name,
  image,
  sectionName,
  count,
  percentage,
  isUp,
}) {
  return (
    <div>
      <div className="relative flex flex-col items-center bg-[#F0F3FC] dark:bg-[#252B43] h-auto rounded overflow-hidden cursor-pointer hover:bg-[#E1E3F0] dark:text-[#FDFEF9] dark:hover:bg-[#333A56] transition-all duration-300 ease-in">
        <div className="flex items-end justify-between w-9/12 gap-2 mt-8">
          <p className="text-base font-medium text-slate-500">{sectionName}</p>
          <Image src={image} alt={name} width={24} height={24} />
        </div>

        <div className="flex items-end justify-between w-9/12 gap-1 mt-5 mb-6">
          <p className="text-4xl font-bold">{count}</p>
          <div className="flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-5 h-5 ${
                isUp
                  ? "fill-green-600 stroke-green-600"
                  : "fill-red-400 stroke-red-400"
              }`}
            >
              {isUp ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              )}
            </svg>
            <p
              className={`text-[14px] font-bold ${
                isUp ? "text-green-600" : "text-red-400"
              }`}
            >
              {percentage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
