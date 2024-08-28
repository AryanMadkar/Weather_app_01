import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const lat = 19.076;
    const lon = 72.8777;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    const uvData = await res.json();
    return NextResponse.json(uvData);
  } catch (error) {
    console.log("Error getiing forcast data", error);
    return new Response("error", { status: 500 });
  }
}
