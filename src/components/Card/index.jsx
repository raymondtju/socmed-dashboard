import Image from "next/image";
import React from "react";

export default function Card({
  username,
  image,
  followers,
  growth,
  isup,
  type,
}) {
  return (
    <div className="relative flex flex-col items-center bg-[#F0F3FC] dark:bg-[#252B43] h-auto rounded overflow-hidden cursor-pointer text-center hover:bg-[#E1E3F0] dark:text-[#FDFEF9] dark:hover:bg-[#333A56] transition-all duration-300 ease-in">
      <span className="absolute w-full h-1 bg-blue-300" />
      <div className="flex items-center gap-2 mt-8 ">
        <Image src={image} alt="facebook" width={24} height={24} />
        <p className="text-sm">{username}</p>
      </div>
      <div className="mt-5">
        <p className="text-[64px] font-black">{followers}</p>
        <p className="-mt-4 text-xl font-light tracking-widest uppercase">
          {type == "followers" ? "followers" : "subscriber"}
        </p>
      </div>
      <div className="flex items-center gap-1 mt-5 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${
            isup
              ? "fill-green-600 stroke-green-600"
              : "fill-red-600 stroke-red-600"
          }`}
        >
          {isup ? (
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
            isup ? "text-green-600" : "text-red-400"
          }`}
        >
          {growth} Today
        </p>
      </div>
    </div>
  );
}
