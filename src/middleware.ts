import { defineMiddleware } from "astro/middleware";
import getUser from "./lib/getUser";

export const onRequest = defineMiddleware(async (context, next) => {
  const token = context.cookies.get("app_auth_token")?.value;
  const userInfo = await getUser(token);

  context.locals.userId = userInfo?.user?.id;

  const pathname = context.url.pathname;
  if (typeof pathname !== 'string') {
    console.error('Invalid pathname:', pathname);
    return context.redirect('/error'); 
  }

  if (pathname.includes("dashboard") || pathname.includes("settings")) {
    if (!userInfo || !userInfo.user) {
      return context.redirect("/login");
    } else {
      return next();
    }
  }

  if (pathname.includes("login")) {
    if (userInfo?.user) {
      return context.redirect("/dashboard");
    }
  }

  return next();
});
