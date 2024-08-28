"use client";
import React from "react";
import { WiHumidity } from "react-icons/wi";
import { useGlobalContext } from "../context/GLobal_context";

const Humidity = () => {
  const { forecast } = useGlobalContext();
  const humidity = forecast && forecast.main && forecast.main.humidity;
  let desc = "";
  if (humidity > 50) {
    desc = "low: its seems less humid";
  } else {
    desc = "high:it seem more humid";
  }

  return (
    <div className="val nom p-2 gap-1  bg-zinc-900 border w-[14rem] min-h-[24vh] rounded-xl flex flex-col justify-between py-[1rem]">
      <h1 className="flex items-center justify-start gap-2">
        <WiHumidity />
        Humidity
      </h1>
      <h1 className="text-[2rem]">{humidity}%</h1>
      <h1 className="text-sm">{desc}</h1>
    </div>
  );
};

export default Humidity;
