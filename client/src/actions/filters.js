export const SET_FILTER = "TOGGLE_FILTER";

const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

export const toggleFilter = filter => dispatch => {
  dispatch(setFilter(filter));
};
