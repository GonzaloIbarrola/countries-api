const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const res = await fetch(
    `${BASE_URL}/all?fields=name,flags,cca3,region,population,capital,currency,language,subregion,domain`
  );
  return res.json();
};

export const getCountryByName = async (name) => {
  const res = await fetch(
    `${BASE_URL}/name/${name}?fullText=true`
  );
  return res.json();
};
