import type { Actions } from './$types.js';


export const actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get("theme");
    

    if (theme === "dark" || theme === "light") {
      cookies.set("colortheme", theme, {
        path: "/",
        maxAge: 60 * 60 * 365 * 24,
      });
    }
  },
} satisfies Actions;
