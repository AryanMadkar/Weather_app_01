"use client";
import React from "react";
import { useGlobalContext } from "../context/GLobal_context";
import { FcAreaChart } from "react-icons/fc";
import { Progress } from "@/components/ui/progress";
import { airqualitytext } from "../utils/MIsc";

const Airpolution = () => {
  const { polution } = useGlobalContext();

  const airqualityindex =
    polution &&
    polution.list &&
    polution.list[0] &&
    polution.list[0].main.aqi * 10;

  const filterIndex = airqualitytext.find((item) => {
    return item.rating === airqualityindex;
  });

  if (!polution || !airqualityindex) {
    return (
      <div className="col-span-full nom py-3 px-4 rounded-xl flex flex-col gap-7  h-[10rem] w-[40vw]">
        {" "}
        <span className="loading h-full  loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="col-span-full nom py-3 px-4 rounded-xl flex flex-col gap-7 simpback h-[10rem] w-[40vw]">
      <h2 className="flex text-lg ">
        <FcAreaChart className="text-2xl" />
        Air polution
      </h2>
      <div>
        <Progress
          value={
            polution &&
            polution.list &&
            polution.list[0] &&
            polution.list[0].main.aqi * 10
          }
          max={100}
          className="progress"
        />
      </div>
      <p>Air quality is {airqualityindex}.</p>
    </div>
  );
};

export default Airpolution;
