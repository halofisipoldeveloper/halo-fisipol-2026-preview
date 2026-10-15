import { defineMiddleware, sequence } from "astro:middleware";

const PUBLIC_ROUTES = [
  "/"
];


const middleware = defineMiddleware(async(context,next) => {
  const pathname = context.url.pathname;

  if (pathname !== "/maintenance") {
   return context.redirect("/maintenance")
  };

  return next();

});

export const onRequest = sequence(middleware);
