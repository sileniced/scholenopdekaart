import { ADD_TO_SELECTED, REMOVE_FROM_SELECTED } from '../actions/schools';

export default (state = [], action = {}) => {
  switch (action.type) {

    case ADD_TO_SELECTED:
      return [ ...state, action.payload ]

    case REMOVE_FROM_SELECTED:
      return state.filter(school => school.C !== action.payload.C)

    default:
      return state;
  }
};
