import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const api = "175ceee39699ab62aeb8be05e73337e0";
    const lat =  19.0760;
    const lon = 72.8777;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
    const res = await axios.get(url);

    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error getiing forcast data", error);
    return new Response("error", { status: 500 });
  }
}
