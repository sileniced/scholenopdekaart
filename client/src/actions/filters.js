export const TOGGLE_FILTER = "TOGGLE_FILTER";
export const SET_FILTERS_FALSE = "SET_FILTERS_FALSE";

const setFilter = filter => ({
  type: TOGGLE_FILTER,
  payload: filter
});

const setAllFiltersFalse = () => ({
  type: SET_FILTERS_FALSE,
  payload: null
});

export const toggleFilter = filter => dispatch => {
  dispatch(setFilter(filter));
};

export const resetFilters = () => dispatch => {
  dispatch(setAllFiltersFalse());
};