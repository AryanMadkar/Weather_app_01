"use client";
import React from "react";
import Defualtcont from "../utils/Defualtcont";

const Topg = () => {
  return (
    <div className="h-full w-full p-2">
      <h2 className="flex items-center gap-2 text-center justify-center font-semibold">Top large cities</h2>
      <div className="flex flex-col  h-full">{Defualtcont.map((state,index)=>{
        return<div className="border flex flex-row items-center justify-around rounded-xl cursor-pointer my-[0.5rem] bg-zinc-900" key={index}>
            <p className="text-xl p-[0.5rem]">{state.name}</p>
        </div>
      })}</div>
    </div>
  );
};

export default Topg;
