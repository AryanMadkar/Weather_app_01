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
    <main className="bg-black flex mainoff  flex-col min-h-[100vh] overflow-x-hidden w-[100vw] text-white">
      <Navbar />
      <div className=" mx-2 h-full max-w-[100vw]   ">
        <div className="pb-4 min-h-[50vh]  flex flex-row ">
          <div className="flex hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale  flex-col items-center justify-center gap-4 mx-[2rem]">
            <Temperature />
          </div>

          <div className="flex flex-col w-full ">
            <div className="instruments   h-full w-full gap-4 flex flex-row item-start">
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <Airpolution />
              </div>
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <Sunset />
              </div>
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <Wind />
              </div>
            </div>
            <div className="instruments mt-[1rem] h-full w-full  gap-4 flex flex-row item-start">
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <DailyForecast />
              </div>
              <div className="h-full hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <Uvindex />
              </div>
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <Population />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[50vh] p-[2rem] flex flex-row justify-between gap-2items-center w-full ">
          <div className="flex h-full hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl w-[22.5%] items-center   justify-center upscale" >
            <Ninedayfor />
          </div>
          <div className="flex flex-col min-h-[50vh] justify-center gap-3  w-[75%]  ">
            <div className="min-h-[30vh] w-full  flex flex-row items-center justify-start gap-2">
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <Feelalike />
              </div>
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <Humidity />
              </div>
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <Visibility />
              </div>
              <div className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-2xl upscale">
                <PRessure />
              </div>
            </div>
            <div className="min-h-[50vh] w-full  flex flex-row items-center justify-between">
              <div className="h-full  w-[100%]  flex items-start justify-center gap-2 ">
                <Mapbox />
                <div className="states flex flex-col gap-3 flex-1 border-2 border-white rounded-2xl h-full hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ">
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
