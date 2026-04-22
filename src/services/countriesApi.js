import countries from "../data/countriesV3.1.json";

const countriesByCode = new Map(
  countries.map((country) => [country.cca3, country])
);

export const getAllCountries = async () => countries;

export const getCountryByName = async (name) => {
  const normalizedName = name.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.common.toLowerCase() === normalizedName ||
      country.name.official.toLowerCase() === normalizedName
  );
};

export const getCountryNamesByCodes = async (codes) =>
  codes
    .map((code) => countriesByCode.get(code)?.name.common)
    .filter(Boolean);
