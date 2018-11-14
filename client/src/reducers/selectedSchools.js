import { ADD_TO_SELECTED, REMOVE_FROM_SELECTED } from '../actions/schools';
import DEVDEV__SELECTED_SCHOOLS_INIT from './DEVDEV__SELECTED_SCHOOLS_INIT'

let init = DEVDEV__SELECTED_SCHOOLS_INIT.selectedSchools
// let init = []

export default (state = init, action = {}) => {
  switch (action.type) {

    case ADD_TO_SELECTED:
      return [ ...state, action.payload ]

    case REMOVE_FROM_SELECTED:
      return state.filter(school => school.C !== action.payload.C)

    default:
      console.log(state)
      return state;
  }
};
