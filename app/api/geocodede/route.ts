import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const api = "175ceee39699ab62aeb8be05e73337e0";
    const searchparams = req.nextUrl.searchParams;
    const city = searchparams.get("search");
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api}`;

    const res = await axios.get(url)
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("error in getcode", error);
  }
}
