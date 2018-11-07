import * as request from 'superagent';
import { baseUrl } from '../constants'

export const SET_SCHOOLS = 'SET_SCHOOLS';
export const SELECT_SCHOOL = 'SELECT_SCHOOL';
export const ADD_TO_SELECTED = 'ADD_TO_SELECTED';
export const REMOVE_FROM_SELECTED = 'REMOVE_FROM_SELECTED';

const toggleSelected = school => ({
  type: SELECT_SCHOOL,
  payload: school,
})

const addToSelected = school => ({
  type: ADD_TO_SELECTED,
  payload: school,
})

const removeFromSelected = school => ({
  type: REMOVE_FROM_SELECTED,
  payload: school
})

export function setSchools(schools) {
  return {
    type: SET_SCHOOLS,
    payload: schools,
  };
}

export const setSchoolToCompare = school => (dispatch, getState) => {
  dispatch(toggleSelected(school))

  const state = getState()
  if (!state.selectedSchools.find(schoolDetails => schoolDetails.C === school.C)) {
    request
    .get(`${baseUrl}/${school.C}`)
    .then(response => {
      dispatch(addToSelected(response.body))
    })
  } else {
    dispatch(removeFromSelected(school))
  }

}

export function getSchools() {
  return function (dispatch) {
    request
    .get(`${baseUrl}/`)
    .then(response => {
      dispatch(setSchools(response.body));
    });
  };
}
