import countryCodes from "$lib/countries.json";

export const load = ({ fetch, params }: any) => {
  const fetchCountry = async (countryID: any) => {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryID}`
    );
    const data = (await res.json()) as any;
    let borderCountries: any[] = [];
    if (data.length > 0 && data[0].borders) {
      data[0].borders.forEach((borderCountryID: any) => {
        countryCodes.forEach((country: any) => {
          if (borderCountryID === country.code) {
            borderCountries.push({
              name: country.name,
              code: country.code,
            });
          }
        });
        {
        }
      });
    }
    return {
      country: data,
      borderCountries: borderCountries,
    };
  };

  return fetchCountry(params.countryName);
};
