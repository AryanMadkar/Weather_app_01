"use client";
import React from "react";
import { useGlobalContext } from "../context/GLobal_context";
import { GiWhirlwind } from "react-icons/gi";
import Image from "next/image";
import compass from "../../public/comp-removebg-preview.png";
import arrow from "../../public/download-removebg-preview.png";
import swim from "../../public/swim.png";
const Wind = () => {
  const { forecast } = useGlobalContext();

  const windspeed = forecast && forecast.wind && forecast.wind.speed;
  const windDigery = forecast && forecast.wind && forecast.wind.deg;

  if (!forecast || !windspeed || !windDigery) {
    return (
      <div className="col-span-full nom py-3 px-4 rounded-xl flex items-center justify-center flex-col relative  h-[10rem] w-fit">
        {" "}
        <span className="loading h-full  loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="col-span-full nom py-3 px-4 rounded-xl flex items-center justify-center flex-col relative dark:bg-zinc-900 h-[10rem] w-fit">
      <h2 className="flex gap-2 item-center justify-center">
        <GiWhirlwind />
        Wind
        <p className="text-emerald-600">{windspeed}</p>
      </h2>
      <div className="compus   w-full  flex item-cente justify-center">
        <div className="image   w-full">
          <Image className="h-[8rem] w-auto" src={compass} alt="" />
          <Image
            className="absolute top-[37%] left-[32%] transition-all duration-500 ease-in-out"
            alt=""
            height={61}
            width={61}
            src="/swim.png"
            style={{ transform: `rotate(${windDigery}deg)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Wind;
