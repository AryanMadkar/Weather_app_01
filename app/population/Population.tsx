"use client";
import React from "react";
import { FcManager } from "react-icons/fc";
import { useGlobalContext } from "../context/GLobal_context";

const Population = () => {

  const {fivedays} =useGlobalContext();
  let population  = fivedays&&
  fivedays.city&&
  fivedays.city.population
  let country  = fivedays&&
  fivedays.city&&
  fivedays.city.country
 
  if(!fivedays){
    return<div><h1>Looding...</h1></div>
  }
  
  return (
    <div className="col-span-full nom py-3 px-4 rounded-xl flex items-start justify-center flex-col gap-3 dark:bg-zinc-900 text-sm h-[10rem] w-fit">
      {" "}
      <h1 className="mb-2 text-sm flex items-center justify-center gap-2">
        <FcManager />
        Population
      </h1>
      <h1 className="text-[2rem]">
        <span className="font-semibold ">{population}</span> 
      </h1>
      <p className="text-sm">Latest UN population<br/> Data for {country}</p>
    </div>
  );
};

export default Population;
