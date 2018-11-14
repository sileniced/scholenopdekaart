import { combineReducers } from 'redux'
import schools from './schools'
import selectedSchools from './selectedSchools.js'
import selectedFilters from './selectedFilters'
import searchFilters from './searchFilters'

export default combineReducers({
  schools,
  selectedSchools,
  selectedFilters,
  searchFilters
})
  