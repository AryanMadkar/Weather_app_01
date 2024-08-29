"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGlobalContext } from "../context/GLobal_context";
import moment from "moment";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { kelvintodeg } from "../utils/MIsc";

const DailyForecast = () => {
  const { forecast, fivedays } = useGlobalContext();
  const { weather } = forecast;
  const { city, list } = fivedays;

  if (!forecast || !weather || !fivedays) {
    return (
      <div className="col-span-full nom py-3 px-4 rounded-xl flex flex-col gap-7  h-[10rem] w-[40vw]">
        <span className="loading h-full  loading-infinity loading-lg"></span>
      </div>
    );
  }

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  // const todaysforecast = list?.filter(
  //   (forecast: { dt_txt: string; main: { temp: number } }) => {
  //     return forecast.dt_txt.startsWith(todayString);
  //   }
  // );

  return (
    <div className="col-span-full nom py-3 px-4 rounded-xl flex flex-col gap-7 simpback h-[10rem] w-[40vw]">
      <div className="h-full flex gap-10  overflow-hidden">
        (
        <div className="w-full">
          <Carousel>
            <CarouselContent>
              <CarouselItem
                className="flex flex-col basis-[8.5rem]  item-center gap-4 cursor-grab"
                key={forecast.dt_txt}
              >
                <p className="ml-2 text-gray-200">
                  {moment(forecast.dt_txt).format("HH:mm")}
                </p>
                <p className="text-[3rem]">{<TiWeatherPartlySunny />}</p>
                <p className="ml-4">{kelvintodeg(forecast.main.temp)}</p>
              </CarouselItem>
              <CarouselItem
                className="flex flex-col basis-[8.5rem]  item-center gap-4 cursor-grab"
                key={forecast.dt_txt}
              >
                <p className="ml-2 text-gray-200">
                  {moment(forecast.dt_txt).format("HH:mm")}
                </p>
                <p className="text-[3rem]">{<TiWeatherPartlySunny />}</p>
                <p className="ml-4">{kelvintodeg(forecast.main.temp)}</p>
              </CarouselItem>
              <CarouselItem
                className="flex flex-col basis-[8.5rem]  item-center gap-4 cursor-grab"
                key={forecast.dt_txt}
              >
                <p className="ml-2 text-gray-200">
                  {moment(forecast.dt_txt).format("HH:mm")}
                </p>
                <p className="text-[3rem]">{<TiWeatherPartlySunny />}</p>
                <p className="ml-4">{kelvintodeg(forecast.main.temp)}</p>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        )
      </div>
    </div>
  );
};

export default DailyForecast;
