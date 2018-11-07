import {SET_SCHOOLS} from '../actions/schools'

export default (state = [], action = {}) => {

  switch (action.type) {

    case SET_SCHOOLS:
    const schools = action.payload.map((school) => {
      const returnObject = {...school};
      returnObject.A = school.A.split("#");
      return returnObject
    })
      return schools

    default:
      return state;
  }
};
