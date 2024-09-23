export const load = async ({ fetch }) => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch status: ${res.status}`);
    }
    const countries = res.json();
    return { countries };
  } catch (error) {
    console.log("Failed to load countries", error);
  }
};