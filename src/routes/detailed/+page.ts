import type { PageLoad } from "./$types.js";

export const load: PageLoad = async ({ parent }) => {
  const { countries } = await parent();
  return { countries };
};
