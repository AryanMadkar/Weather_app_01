"use client";
import React from "react";
import { IoEye } from "react-icons/io5";
import { useGlobalContext } from "../context/GLobal_context";

const Visibility = () => {
  const { forecast } = useGlobalContext();

  const feeling = forecast && forecast.visibility;

  if (!feeling || !forecast) {
    return (
      <div className="val nom p-2 gap-1   py-[1rem] w-[14rem] min-h-[24vh] rounded-xl flex flex-col justify-between">
        {" "}
        <span className="loading h-full  loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="val nom p-2 gap-1  bg-zinc-900 border py-[1rem] w-[14rem] min-h-[24vh] rounded-xl flex flex-col justify-between ">
      <h1 className="flex items-center justify-start gap-2">
        <IoEye />
        Visibility
      </h1>
      <h1 className="text-[2rem]">{feeling} KM</h1>
      <h1 className="">Good:Easily navigate</h1>
    </div>
  );
};

export default Visibility;
