import { defineMiddleware, sequence } from "astro:middleware";

const middleware = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  if (
    pathname.startsWith("/_astro/") ||
    pathname.startsWith("/api/") ||
    pathname.includes(".")
  ) {
    return next();
  }

  if (pathname === "/maintenance" || pathname === "/maintenance/") {
    return next();
  }

  return context.redirect("/maintenance");
});

export const onRequest = sequence(middleware);
