"use client";
import React from 'react'
import { BsSpeedometer } from "react-icons/bs";
import { useGlobalContext } from "../context/GLobal_context";

const PRessure = () => {

    const { forecast } = useGlobalContext();
  
    const pressure = forecast&&forecast.main&&forecast.main.pressure
    let desc = "";
  if (pressure > 50) {
    desc = "low: its seems less pressure";
  } else {
    desc = "high:it seem more pressure";
  }
  
    return (
        <div className="val nom p-2 gap-1  bg-zinc-900 border py-[1rem] w-[14rem] min-h-[24vh] rounded-xl flex flex-col justify-between ">
          <h1 className="flex items-center justify-start gap-2">
          <BsSpeedometer />
          Presure
          </h1>
          <h1 className="text-[2rem]">
            {pressure} KM
          </h1>
          <h1 className="text-sm">{desc}</h1>
        </div>
      );
}

export default PRessure