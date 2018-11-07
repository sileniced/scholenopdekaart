import * as request from "superagent";
import {baseUrl} from '../constants'

export const SET_SCHOOLS = "SET_SCHOOLS";
export const SELECT_SCHOOL = "SELECT_SCHOOL";

export function setSchools(schools) {
  return {
    type: SET_SCHOOLS,
    payload: schools
  };
}

export function setSchoolToCompare(school) {
    return {
      type: SELECT_SCHOOL,
      payload: school
    };
  }
  

export function getSchools() {
  return function(dispatch) {

    request
      .get(`${baseUrl}/`)
      .then(response => {
        dispatch(setSchools(response.body));
      });
  };
}
