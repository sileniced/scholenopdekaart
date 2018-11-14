export const TOGGLE_SEARCH_FILTER = "TOGGLE_SEARCH_FILTER";
export const SET_SEARCH_FILTERS_FALSE = "SET_SEARCH_FILTERS_FALSE";

const setSearchFilter = filter => ({
  type: TOGGLE_SEARCH_FILTER,
  payload: filter
});

// const setAllFiltersFalse = () => ({
//   type: SET_SEARCH_FILTERS_FALSE,
//   payload: null
// });

export const toggleSearchFilter = filter => dispatch => {
  dispatch(setSearchFilter(filter));
};

// export const resetFilters = () => dispatch => {
//   dispatch(setAllFiltersFalse());
// };