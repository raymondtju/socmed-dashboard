import React from "react";
import datas from "@/data";
import Theme from "../Theme";

export default function Header() {
  let sum = 0;
  datas.data.forEach((card) => {
    sum += card.followers;
  });

  return (
    <header className="flex flex-col pt-10 md:flex-row md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-wide md:text-4xl">
          Social Media Dashboard
        </h1>
        <p className="pt-1 text-lg md:text-xl text-slate-500">
          Total Followers: {sum}
        </p>
      </div>
      <div className="mt-5">
        <Theme />
      </div>
    </header>
  );
}
