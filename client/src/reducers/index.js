import { combineReducers } from 'redux'
import schools from './schools'
import selectedSchools from './selectedSchools.js'
import selectedFilters from './selectedFilters'

export default combineReducers({
  schools,
  selectedSchools,
  selectedFilters
})
  