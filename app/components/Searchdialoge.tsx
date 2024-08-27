"use CLient";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcBinoculars } from "react-icons/fc";

const Searchdialoge = () => {
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
            <CommandInput placeholder="type a command or search here....." />
            <ul className="px-2 pb-2">
              <p className="p-2 text-sm text-muted-foreground pt-2 cursor-pointer">
                Suggestions
              </p>
            </ul>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Searchdialoge;
