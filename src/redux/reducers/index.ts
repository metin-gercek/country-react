import { combineReducers } from 'redux'
import countryReducer from './countryReducer'

const createRootReducer = () =>
  combineReducers({
    country: countryReducer,
  })

export default createRootReducer
