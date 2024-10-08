export const load = ({ fetch, params }: any) => {
  const fetchCountry = async (countryID: any) => {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryID}`
    );
    const data = (await res.json()) as any;
    let borderCountries: any[] = [];
    if (data.borders) {
      console.log("in borders");
      const fetchBorderCountries = async (borderCountryID: any) => {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${borderCountryID}`
        );
        const borderCountryData = await res.json();
        console.log("here it is" + borderCountryData);
        return borderCountryData;
      };
      borderCountries = await Promise.all(
        data.borders.map((element: any) => fetchBorderCountries(element.cca3))
      );
    }
    return {
      country: data,
      borderCountries: borderCountries,
    };
  };

  return fetchCountry(params.countryName);
};
