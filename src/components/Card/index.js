import React from "react";

export default function Card({ username }) {
  return (
    <div
      className={`flex flex-col items-center bg-[#252B43] h-auto rounded overflow-hidden cursor-pointer text-center`}
    >
      <div className="flex justify-between flex-col">
        <div className="flex flex-row mt-8">
          <h2 className="text-xl font-bold">facebook</h2>
          <p className="text-sm">{username}</p>
        </div>
        <div className="mt-5">
          <p className="text-[64px] font-black">1987</p>
          <p className="text-xl font-thin tracking-widest -mt-4">FOLLOWERS</p>
        </div>
        <div className="mt-5 mb-8">
          <p className="text-sm">19 Today</p>
        </div>
      </div>
    </div>
  );
}
