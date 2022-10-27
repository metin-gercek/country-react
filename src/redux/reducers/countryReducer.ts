import { REMOVE_COUNTRY } from './../../types'
import {
  FETCH_COUNTRIES_REQUEST,
  CountryState,
  ADD_COUNTRY,
  SORT_BY_NAME,
  SORT_POPULATION,
} from '../../types'
const initialState: CountryState = {
  countries: [],
  favoriteAmount: 0,
  favoriteCountries: [],
}

const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        countries: action.payload,
      }
    case ADD_COUNTRY:
      const addedCountry = state.countries.find(
        (country) => country.name.common === action.payload
      )
      return {
        ...state,
        favoriteAmount: state.favoriteAmount + 1,
        favoriteCountries: [...state.favoriteCountries, addedCountry],
      }
    case REMOVE_COUNTRY:
      const removedCountry = state.countries.find(
        (country) => country.name.common === action.payload
      )
      return {
        ...state,
        favoriteAmount: state.favoriteAmount - 1,
        favoriteCountries: state.favoriteCountries.filter(
          (country) => country.name.common !== removedCountry.name.common
        ),
      }
    case SORT_BY_NAME:
      let sortedCountries
      const sortby = action.payload
      if (sortby === 'asc') {
        sortedCountries = state.countries.sort((a: any, b: any) =>
          a.name.common > b.name.common ? 1 : -1
        )
      } else {
        sortedCountries = state.countries.sort((a: any, b: any) =>
          a.name.common > b.name.common ? -1 : 1
        )
      }
      //  console.log(sortedCountries)
      return { ...state, countries: sortedCountries }
    case SORT_POPULATION:
      let sortedPupulation
      const sortbyPopulation = action.payload
      if (sortbyPopulation === 'lowToHigh') {
        sortedPupulation = state.countries.sort(
          (a: any, b: any) => a.population - b.population
        )
      } else {
        sortedPupulation = state.countries.sort(
          (a: any, b: any) => b.population - a.population
        )
      }
      //  console.log(sortedCountries)
      return { ...state, countries: sortedPupulation }

    default:
      return state
  }
}

export default countryReducer
