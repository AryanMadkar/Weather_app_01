"use client";

import React from "react";
import { SlCalender } from "react-icons/sl";
import { Progress } from "@/components/ui/progress";
import { useGlobalContext } from "../context/GLobal_context";
import { unix } from "moment";
import { kelvintodeg, unixtoday, unixtotime } from "../utils/MIsc";

const Ninedayfor = () => {
  const { fivedays } = useGlobalContext();

  const city = fivedays && fivedays.city && fivedays.city.country;
  const { list } = fivedays;

  const processdata = (
    dailyData: {
      main: { temp_min: number; temp_max: number };
      dt: number;
    }[]
  ) => {
    let minTemp = Number.MAX_VALUE;
    let maxTemp = Number.MIN_VALUE;

    dailyData?.forEach(
      (day: { main: { temp_min: number; temp_max: number }; dt: number }) => {
        if (day.main.temp_min < minTemp) {
          minTemp = day.main.temp_min;
        }
        if (day.main.temp_max > minTemp) {
          maxTemp = day.main.temp_max;
        }
      }
    );

    return {
      day: unixtoday(dailyData && dailyData[0] && dailyData[0].dt),
      minTemp: kelvintodeg(minTemp),
      maxTemp: kelvintodeg(maxTemp),
    };
  };

  const dailyfocus = [];
  for (let i = 0; i < 40; i += 8) {
    const dailyData = list?.slice(i, i + 5);
    dailyfocus.push(processdata(dailyData));
  }

  if (!fivedays||!list||!city||!dailyfocus) {
    return (
      <div className="val nom p-2  w-full min-h-[50vh]  rounded-xl flex flex-col justify-start">
        <span className="loading h-full  loading-infinity loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="val nom p-2 bg-zinc-900 border w-full min-h-[50vh]  rounded-xl flex flex-col justify-start">
      <h1 className="flex items-center justify-start gap-2">
        <SlCalender className="font-bold" />
        <span>5-day Forecast for {city}</span>
      </h1>
      <div className="flex  flex-col items-center justify-center gap-1 mt-2">
        <div className="flex text-sm w-full flex-row gap-2 items-center justify-start">
          <h1>
            <span className="mb-1">
              {dailyfocus && dailyfocus[4] && dailyfocus[4].day}
              <br />
            </span>
            (low) {dailyfocus && dailyfocus[4] && dailyfocus[4].minTemp}
          </h1>
          <Progress
            value={dailyfocus && dailyfocus[4] && dailyfocus[4].minTemp}
            max={dailyfocus && dailyfocus[4] && dailyfocus[4].maxTemp}
            className="progress"
          />
          <h1>(High) {dailyfocus && dailyfocus[4] && dailyfocus[4].maxTemp}</h1>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center gap-1 mt-2">
        <div className="flex text-sm w-full flex-row gap-2 items-center justify-start">
          <h1>
            <span className="mb-1">
              {dailyfocus && dailyfocus[0] && dailyfocus[0].day}
              <br />
            </span>
            (low) {dailyfocus && dailyfocus[0] && dailyfocus[0].minTemp}
          </h1>
          <Progress
            value={dailyfocus && dailyfocus[0] && dailyfocus[0].minTemp}
            max={dailyfocus && dailyfocus[0] && dailyfocus[0].maxTemp}
            className="progress"
          />
          <h1>(High) {dailyfocus && dailyfocus[0] && dailyfocus[0].maxTemp}</h1>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center gap-1 mt-2">
        <div className="flex text-sm w-full flex-row gap-2 items-center justify-start">
          <h1>
            <span className="mb-1">
              {dailyfocus && dailyfocus[1] && dailyfocus[1].day}
              <br />
            </span>
            (low) {dailyfocus && dailyfocus[1] && dailyfocus[1].minTemp}
          </h1>
          <Progress
            value={dailyfocus && dailyfocus[1] && dailyfocus[1].minTemp}
            max={dailyfocus && dailyfocus[1] && dailyfocus[1].maxTemp}
            className="progress"
          />
          <h1>(high) {dailyfocus && dailyfocus[1] && dailyfocus[1].maxTemp}</h1>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center gap-1 mt-2">
        <div className="flex text-sm w-full flex-row gap-2 items-center justify-start">
          <h1>
            <span className="mb-1">
              {dailyfocus && dailyfocus[2] && dailyfocus[2].day}
              <br />
            </span>
            (low) {dailyfocus && dailyfocus[2] && dailyfocus[2].minTemp}
          </h1>
          <Progress
            value={dailyfocus && dailyfocus[2] && dailyfocus[2].minTemp}
            max={dailyfocus && dailyfocus[2] && dailyfocus[2].maxTemp}
            className="progress"
          />
          <h1>(HIgh) {dailyfocus && dailyfocus[2] && dailyfocus[2].maxTemp}</h1>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center gap-1 mt-2">
        <div className="flex text-sm w-full flex-row gap-2 items-center justify-start">
          <h1>
            <span className="mb-1">
              {dailyfocus && dailyfocus[3] && dailyfocus[3].day}
              <br />
            </span>
            (low) {dailyfocus && dailyfocus[3] && dailyfocus[3].minTemp}
          </h1>
          <Progress
            value={dailyfocus && dailyfocus[3] && dailyfocus[3].minTemp}
            max={dailyfocus && dailyfocus[3] && dailyfocus[3].maxTemp}
            className="progress"
          />
          <h1>(High) {dailyfocus && dailyfocus[3] && dailyfocus[3].maxTemp}</h1>
        </div>
      </div>
    </div>
  );
};

export default Ninedayfor;
