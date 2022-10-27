// Action types
export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_POPULATION = 'SORT_POPULATION'

// Country
export type Country =
  | {
      flag: any
      name: string
      officialName: string
      capital: string[]
      population: number
      language: string
      region: string
    }
  | any
export type CountryState = {
  countries: Country[]
  favoriteAmount: number
  favoriteCountries: Country[]
}

export type AppState = {
  country: CountryState
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type SortByName = {
  type: typeof SORT_BY_NAME
  payload: 'asc' | 'desc'
}

export type SortPopulation = {
  type: typeof SORT_POPULATION
  payload: 'lowToHigh' | 'highToLow'
}
