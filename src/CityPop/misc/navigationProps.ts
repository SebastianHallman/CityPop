export type NavigationType = {
  Home: undefined,
  CitySearch: undefined,
  CountrySearch: undefined,
  PopulationScreen: {city: string, population: number},
  CountryList: {cities: any[], country: string}
}