import Image from "next/image";
import Navbar from "./components/Navbar";
import Temperature from "./Temperature/Temperature";
import Airpolution from "./airpolution/Airpolution";
import Sunset from "./sunset/Sunset";
import Wind from "./wind/Wind";

import DailyForecast from "./DailyForecast/DailyForecast";
import Uvindex from "./uvindex/Uvindex";
import Population from "./population/Population";
import Ninedayfor from "./ninedays/Ninedayfor";
import Feelalike from "./feelalike/Feelalike";
import Humidity from "./humidity/Humidity";
import Visibility from "./visibility/Visibility";
import PRessure from "./pressure/PRessure";
import Mapbox from "./Mapbox/Mapbox";
import Topg from "./Toplcities/Topg";
import Footer from "./footer/Footer";


export default function Home() {
  return (
    <main className="bg-black flex   flex-col min-h-[100vh] overflow-x-hidden w-[100vw] text-white">
      <Navbar />
      <div className=" mx-2 h-full max-w-[100vw]   ">
        <div className="pb-4 min-h-[50vh]  flex flex-row ">
          <div className="flex   flex-col items-center justify-center gap-4 mx-[2rem]">
            <Temperature />
          </div>

          <div className="flex flex-col w-full ">
            <div className="instruments   h-full w-full gap-4 flex flex-row item-start">
              <Airpolution />
              <Sunset />
              <Wind />
            </div>
            <div className="instruments mt-[1rem] h-full w-full  gap-4 flex flex-row item-start">
              <DailyForecast />
              <Uvindex />
              <Population />
            </div>
          </div>
        </div>
        <div className="min-h-[50vh] p-[2rem] flex flex-row justify-between gap-2items-center w-full ">
          <div className="flex h-full w-[22.5%] items-center   justify-center">
            <Ninedayfor />
          </div>
          <div className="flex flex-col min-h-[50vh] justify-center gap-3 w-[75%]  ">
            <div className="min-h-[30vh] w-full  flex flex-row items-center justify-start gap-2">
              <Feelalike />
              <Humidity />
              <Visibility />
              <PRessure />
            </div>
            <div className="min-h-[50vh] w-full  flex flex-row items-center justify-between">
              <div className="h-full  w-[100%]  flex items-start justify-center gap-2">
                <Mapbox />
                <div className="states flex flex-col gap-3 flex-1 border-2 border-white rounded-2xl h-full">
                  <Topg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
