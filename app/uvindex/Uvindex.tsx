"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { TbUvIndex } from "react-icons/tb";
import { useGlobalContext } from "../context/GLobal_context";

const Uvindex = () => {
  const { uvdata } = useGlobalContext();
  console.log(uvdata);

  const elavt = uvdata&&uvdata.daily&&uvdata.daily.uv_index_max
  ;
  let show = ""
  let textmain=""
  if (elavt > 5) {
     show = "High";
     textmain="High UV Risk"
  } else if (elavt < 5) {
     show = "low";
     textmain="Low UV Risk"
  } else {
     show = "Medium";
     textmain="Moderate UV Risk"
  }
  if(!uvdata||!elavt){
    return<div><h1>Looding...</h1></div>
  }

  return (
    <div className="val nom p-2 gap-1  bg-zinc-900 border w-[14rem] min-h-[24vh] rounded-xl flex flex-col justify-between ">
      <div>
        <h1 className="flex items-start justify-start">
          <TbUvIndex className="text-2xl" />
          Uv Index
        </h1>
      </div>
      <div className="flex flex-col gap-1">
        <h1>{elavt}({show})</h1>
        <Progress value={elavt
        } max={10} className="progress mt-2" />
      </div>
      <div>
        <h1 className="text-sm">{textmain}</h1>
      </div>
    </div>
  );
};

export default Uvindex;
