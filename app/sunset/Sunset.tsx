"use client";
import React from "react";
import { useGlobalContext } from "../context/GLobal_context";
import { unixtotime } from "../utils/MIsc";
import { PiCloudSunDuotone } from "react-icons/pi";
import { PiCloudSunFill } from "react-icons/pi";

const Sunset = () => {
  const { forecast } = useGlobalContext();

  const times = forecast && forecast.sys && forecast.sys.sunset;
  const times2 = forecast && forecast.sys && forecast.sys.sunrise;
  //   const times = forecast?.sys.sunset;
  const timezone = forecast?.timezone; 
 
  const sunsettime = unixtotime(times, timezone);
  const sunrisetime = unixtotime(times2, timezone);
  if (!forecast||!sunrisetime||!sunsettime||!timezone) {
    return <div className="col-span-full nom py-3 px-4 rounded-xl flex items-center justify-center flex-col gap-7  h-[10rem] w-fit"><span className="loading h-full  loading-infinity loading-lg"></span></div>;
  }
  return (
    <div className="col-span-full nom py-3 px-4 rounded-xl flex items-center justify-center flex-col gap-7 dark:bg-zinc-900 h-[10rem] w-fit">
      <div className="top  flex m-[2rem] flex-col items-center justify-around w-full">
        <div className="flex flex-col justify-around h-full w-1/2">
          <p className="flex text-lg items-center gap-2 font-medium">
            <PiCloudSunDuotone className="text-[3rem]" />
            sunrise
          </p>
          <p className="text-[1.5rem]">{sunrisetime}</p>
        </div>
        <div className="flex flex-col justify-between h-full w-1/2">
          {" "}
          <p className=" text-lg flex items-center gap-2 font-medium">
            <PiCloudSunFill />
            sunset
          </p>
          <p className="text-[1.5rem]">{sunsettime}</p>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Sunset;
