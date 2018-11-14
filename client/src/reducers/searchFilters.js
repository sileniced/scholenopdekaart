import {
  TOGGLE_SEARCH_FILTER,
  SET_SEARCH_FILTERS_FALSE
} from "../actions/searchFilters";
import { typeOnderwijs, denominatie, conceptOnderwijs } from "../constants";

const initialState = { typeOnderwijs: {}, denominatie: {}, conceptOnderwijs: {} };
Object.keys(typeOnderwijs).map(type => {
  initialState.typeOnderwijs[type] = false;
  return type;
});
Object.keys(denominatie).map(denominatie => {
  initialState.denominatie[denominatie] = false;
  return denominatie;
});
Object.keys(conceptOnderwijs).map(conceptOnderwijs => {
  initialState.conceptOnderwijs[conceptOnderwijs] = false;
  return conceptOnderwijs;
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SEARCH_FILTER:
      const newSetting = !state[Object.keys(action.payload)][
        Object.values(action.payload)
      ];
      const returnObject = { ...state };
      returnObject[Object.keys(action.payload)][
        Object.values(action.payload)
      ] = newSetting;
      return returnObject;

    // case SET_SEARCH_FILTERS_FALSE:
    //   const returnAllFalse = {...state};
    //   for(let filter in returnAllFalse) {
    //     returnAllFalse[filter] = false;
    //   }
    //   return returnAllFalse;

    default:
      return state;
  }
};
