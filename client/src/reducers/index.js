import { combineReducers } from 'redux'

import schools from './schools'
import selectedSchools from './selectedSchools.js'

export default combineReducers({
  schools,
  selectedSchools
})
  