export const load = ({ fetch, params }: any) => {
  const fetchCountry = async (countryID: any) => {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryID}`
    );
    const data = (await res.json()) as any;
    let borderCountries: any[] = [];
    if (data.length > 0 && data[0].borders) {
      const fetchBorderCountries = async (borderCountryID: any) => {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${borderCountryID}`
        );
        const borderCountryData = (await res.json()) as any;
        return {
          name: borderCountryData[0].name.common,
          cca3: borderCountryData[0].cca3,
        };
      };
      borderCountries = await Promise.all(
        data[0].borders.map((element: any) => fetchBorderCountries(element))
      );
    }
    return {
      country: data,
      borderCountries: borderCountries,
    };
  };

  return fetchCountry(params.countryName);
};
