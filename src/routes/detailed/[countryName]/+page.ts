export const load = ({ fetch, params }) => {
  const fetchCountry = async (countryID: any) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryID}`);
    const data = await res.json();
    return data;
  };

  return {
    country: fetchCountry(params.countryName),
  };
};
