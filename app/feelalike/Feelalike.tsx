"use client";
import React from "react";
import { LuThermometerSun } from "react-icons/lu";
import { useGlobalContext } from "../context/GLobal_context";
import { kelvintodeg } from "../utils/MIsc";

const Feelalike = () => {
  const { forecast } = useGlobalContext();

  const feeling = kelvintodeg(
    forecast && forecast.main && forecast.main.feels_like
  );
  let desc = "";
  if (feeling > 50) {
    desc = "feels close to actual temperature";
  } else {
    desc = "feel far feom actual temperature";
  }

  if (!forecast || !feeling||!desc) {
    return (
      <div className="val nom p-2 gap-1  w-[14rem] min-h-[24vh] rounded-xl flex flex-col justify-between">
        {" "}
        <span className="loading h-full  loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="val nom p-2 gap-1  bg-zinc-900 border w-[14rem] min-h-[24vh] rounded-xl flex flex-col justify-between ">
      <h1 className="flex text-sm items-center justify-start gap-2">
        <LuThermometerSun /> FeelAlive
      </h1>
      <h1 className="text-[2rem]">{feeling}°</h1>
      <h1 className="text-sm">{desc}</h1>
    </div>
  );
};

export default Feelalike;
