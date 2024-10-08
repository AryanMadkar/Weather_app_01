import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const api = "175ceee39699ab62aeb8be05e73337e0";
    const searchparams = req.nextUrl.searchParams;

    const lat = searchparams.get("lat");
    const lon = searchparams.get("lon");
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api}`;
    const res = await axios.get(url);

    return NextResponse.json(res.data);
  } catch (error) {
    console.log("error fetching data in airpollution", error);
  }
}
