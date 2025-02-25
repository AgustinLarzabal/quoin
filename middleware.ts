import { updateSession } from "@/utils/supabase/middleware";
import { createI18nMiddleware } from "next-international/middleware";
import type { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export async function middleware(request: NextRequest) {
  return await updateSession(request, I18nMiddleware(request));
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
