import { SET_FILTER } from "../actions/filters";
import { filters } from "../constants";

const initialState = {};
Object.keys(filters).map((filter) => {initialState[filter] = false})

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FILTER:
      const newSetting = !state[action.payload];
      const returnObject = { ...state };
      returnObject[action.payload] = newSetting;
      return returnObject;

    default:
      return state;
  }
};
