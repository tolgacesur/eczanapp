import { combineReducers } from 'redux'
import pharmacyReducer from './pharmacyReducer'
import selectedCityReducer from './selectedCityReducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    pharmacy: pharmacyReducer,
    selectedCity: selectedCityReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
