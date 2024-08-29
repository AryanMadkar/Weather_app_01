"use client";
import React from "react";
import { FcManager } from "react-icons/fc";
import { useGlobalContext } from "../context/GLobal_context";

const Population = () => {
  const { fivedays } = useGlobalContext();
  let population = fivedays && fivedays.city && fivedays.city.population;
  let country = fivedays && fivedays.city && fivedays.city.country;

  if (!fivedays || !population || !country) {
    return (
      <div className="col-span-full  nom py-3 px-4 rounded-xl flex items-start justify-center flex-col gap-3  text-sm h-[10rem] w-fit">
        {" "}
        <span className="loading h-full  loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="col-span-full nom py-3 px-4 rounded-xl flex items-start justify-center flex-col gap-3 simpback text-sm h-[10rem] w-fit">
      {" "}
      <h1 className="mb-2 stat-title text-sm flex items-center justify-center gap-2">
        <FcManager />
        Population
      </h1>
      <h1 className="text-[2rem] stat-value text-white">
        <span className="font-semibold  ">{population}</span>
      </h1>
      <p className="text-sm stat-desc">
        Latest UN population
        <br /> Data for {country}
      </p>
    </div>
  );
};

export default Population;
