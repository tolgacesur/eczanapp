import { combineReducers } from 'redux'
import pharmacyReducer from './pharmacyReducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    pharmacy: pharmacyReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
