export const load = async ({ parent }) => {
  const { countries } = await parent();
};
