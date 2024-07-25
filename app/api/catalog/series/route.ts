import { getSeriesByCountry } from "@/data/catalog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const countryID = searchParams.get("countryID");
  const data = await getSeriesByCountry(countryID ?? "");

  console.log("GET data:", data);

  return Response.json({ data });
}
