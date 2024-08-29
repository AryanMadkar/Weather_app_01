"use CLient";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Command, CommandInput } from "@/components/ui/command";

import { FcBinoculars } from "react-icons/fc";
import {
  useGlobalContext,
  useGlobalContextUpdate,
} from "../context/GLobal_context";

const Searchdialoge = () => {
  const [hover, setHover] = React.useState<number>(0);
  const { geocoded, inputvalue, handleInput } = useGlobalContext();
  const { setactivecity } = useGlobalContextUpdate();

  const getclickcoordinates = (lat: Number, lon: Number) => {
    setactivecity([lat, lon]);
  };
  return (
    <div className="search flex items-center justify-center gap-0">
      {/* <Input className="outline-none" /> */}

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bporder hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex h-full w-full  items-center justify-center text-sm font-medium hover:dark:bg-[#131313] gap-3 ease-in-out duration-200"
          >
            <p className="text-sm text-muted-foreground">Search Here.....</p>
            <div className="command bg-[#262626] p-[0.5rem] rounded-xl">
              <FcBinoculars />
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search here</DialogTitle>
          </DialogHeader>
          <Command className="rounded-lg border ">
            <input
              type="text"
              className="p-[1rem] rounded-lg"
              value={inputvalue}
              onChange={handleInput}
              placeholder="type a command or search here....."
            />
            <ul className="px-2 pb-2">
              <p className="p-2 text-sm text-muted-foreground pt-2 cursor-pointer">
                Suggestions
                {geocoded?.length === 0 || (!geocoded && <p>NO results</p>)}
                {geocoded &&
                  geocoded.map(
                    (
                      item: {
                        name: string;
                        country: string;
                        state: string;
                        lat: number;
                        lon: number;
                      },
                      index: number
                    ) => {
                      const { country, name, state } = item;

                      return (
                        <li
                          onMouseEnter={() => {
                            setHover(index);
                          }}
                          key={index}
                          className="py-3 hover:scale-105 hover:bg-black transition-all px-2 text-sm  cursor-default"
                          onClick={() => {
                            getclickcoordinates(item.lat, item.lon);
                          }}
                        >
                          <p className="text">
                            {name + " "},{state && state + " "},{country}
                          </p>
                        </li>
                      );
                    }
                  )}
              </p>
            </ul>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Searchdialoge;
