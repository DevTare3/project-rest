import type { PageLoad } from "../$types";

export const load: PageLoad = async ({ parent }) => {
  const { countries } = await parent();

  return { countries };
};
