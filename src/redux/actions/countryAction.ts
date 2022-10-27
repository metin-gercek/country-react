import { Dispatch } from 'redux'
import {
  FETCH_COUNTRIES_REQUEST,
  Country,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  SORT_BY_NAME,
  SORT_POPULATION,
} from '../../types'

export const fetchCountriesRequest = (countries: Country) => {
  return {
    type: FETCH_COUNTRIES_REQUEST,
    payload: countries,
  }
}

// thunk
export const fetchCountries = () => {
  const query = `fields=name,flags,languages,population,region,capital,currencies`
  const URL = `https://restcountries.com/v3.1/all?${query}`
  return (dispatch: Dispatch) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const countries = data
        dispatch(fetchCountriesRequest(countries))
      })
  }
}

//Add Country
export const addCountry = (countryName: string) => {
  return {
    type: ADD_COUNTRY,
    payload: countryName,
  }
}

//Remove Country
export const removeCountry = (countryName: string) => {
  return {
    type: REMOVE_COUNTRY,
    payload: countryName,
  }
}
//Remove Country
export const sortCountries = (sortby: 'asc' | 'desc') => {
  return {
    type: SORT_BY_NAME,
    payload: sortby,
  }
}
export const sortPopulation = (sortbyPopulation: 'highToLow' | 'lowToHigh') => {
  return {
    type: SORT_POPULATION,
    payload: sortbyPopulation,
  }
}
