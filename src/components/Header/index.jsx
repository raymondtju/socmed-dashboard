import React from "react";
import datas from "@/data";
import Theme from "../Theme";

export default function Header() {
  let sum = 0;
  datas.data.forEach((card) => {
    sum += card.followers;
  });

  return (
    <header className="flex justify-between pt-10">
      <div>
        <h1 className="text-4xl font-bold tracking-wide">
          Social Media Dashboard
        </h1>
        <p className="pt-1 text-xl text-slate-500">Total Followers: {sum}</p>
      </div>
      <div>
        <Theme />
      </div>
    </header>
  );
}
