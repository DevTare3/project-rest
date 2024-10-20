import { COLOR } from "$env/static/private";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({event, resolve}) => {
    let theme: string | null = null;
    const newTheme = event.url.searchParams.get("theme")
    const cookieTheme = event.cookies.get("colortheme")

    if(newTheme) {
        theme = newTheme;
    } else if(cookieTheme)
    {
        theme = cookieTheme;
    }
    
    if(theme) {
        console.log(theme);
        return await resolve(event, {
            transformPageChunk: ({html}) =>
                html.replace('class="font-nunito"',`class="font-nunito ${theme}"`),
        }
    )
}
return await resolve(event) 
}) satisfies Handle