import * as request from "superagent";
import {baseUrl} from '../constants'

export const SET_SCHOOLS = "SET_SCHOOLS";

export function setSchools(schools) {
  return {
    type: SET_SCHOOLS,
    payload: schools
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
