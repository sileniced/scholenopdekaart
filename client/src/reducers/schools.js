import { SET_SCHOOLS, SELECT_SCHOOL, FETCH_SEARCHED_SCHOOLS } from "../actions/schools";

export default (state = [], action = {}) => {
  switch (action.type) {
    
    case SET_SCHOOLS:
      const schools = action.payload.map(school => {
        const returnObject = { ...school, selected: false };
        returnObject.A = school.A.split("#");
        return returnObject;
      });
      return schools;

    case SELECT_SCHOOL:
      const selected = !action.payload.selected;
      const school = { ...action.payload, selected };
      const schoolIndex = state.findIndex(item => item.I === school.I);
      const returnObject = [...state];
      returnObject[schoolIndex] = school;
      return returnObject;
    
    case FETCH_SEARCHED_SCHOOLS:
    const searchedSchools = action.payload.map(school => {
      const returnObject = { ...school, selected: false };
      returnObject.A = school.A.split("#");
      return returnObject;
    });
    return searchedSchools;

    default:
      return state;
  }
};
