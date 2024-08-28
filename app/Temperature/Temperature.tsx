"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GLobal_context";
import { Skeleton } from "@/components/ui/skeleton";
import { FaCloud } from "react-icons/fa6";
import { kelvintodeg } from "./../utils/MIsc";
import moment from "moment";

const Temperature = () => {
  const { forecast } = useGlobalContext();
  const { main, timezone, name, weather } = forecast;
  const temp = kelvintodeg(main?.temp);
  const mintemp = kelvintodeg(main?.temp_min);
  const maxtemp = kelvintodeg(main?.temp_max);
  const name1 = name;
  const [time, setTime] = useState<string>("");
  const [day2, setday2] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      const formatedtime = localMoment.format("HH:mm:ss");
      const day1 = localMoment.format("dddd");

      setTime(formatedtime);
      setday2(day1);
      clearInterval(interval);
    }, 1000);
  }, []);


  if (!forecast || !weather) {
    return <div>Loading....</div>;
  }
  return (
    <div
      id="val"
      className="val nom pt-6 pb-5 bg-zinc-900 border w-[18rem] min-h-[50vh] rounded-xl flex flex-col justify-between "
    >
      <div className="uppertemp w-full h-[15%] flex flex-row px-2 justify-between items-start ">
        <div className="flex flex-col leading-none items-start justify-center gap-2">
          <h1>{day2}</h1>
          <h1>{name1}</h1>
        </div>
        <div>{time}</div>
      </div>
      <div className="midtemp w-full h-[70%]  flex items-center justify-center">
        <h1 className="text-[8rem] font-bold">
          {temp}
          <span>°</span>
        </h1>
      </div>
      <div className="lowertemp w-full h-[15%] flex flex-col px-2 items-start justify-start">
        <FaCloud className="text-[2xl]" />
        <h1>
          {forecast&&
          forecast.weather &&
          forecast.weather[0] &&
          forecast.weather[0].main}
        </h1>
        <div className="flex flex-row items-center justify-center gap-2">
          <h1>
            Low:<span>{mintemp}</span>°
          </h1>
          <h1>
            High:<span>{maxtemp}</span>°
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
