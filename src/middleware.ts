import { defineMiddleware, sequence } from "astro:middleware";

const middleware = defineMiddleware(async (context, next) => {

  return next()
});

export const onRequest = sequence(middleware);
