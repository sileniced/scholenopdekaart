import { TOGGLE_FILTER, SET_FILTERS_FALSE } from '../actions/filters'
import { filters } from '../constants'

const initialState = {}

Object.keys(filters).map((filter) => {
  initialState[filter] = true
  return filter
})

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case TOGGLE_FILTER:
      const newSetting = !state[action.payload]
      const returnObject = { ...state }
      returnObject[action.payload] = newSetting
      return returnObject

    case SET_FILTERS_FALSE:
      const returnAllFalse = { ...state }
      for (let filter in returnAllFalse) {
        returnAllFalse[filter] = false
      }
      return returnAllFalse

    default:
      return state
  }
};
