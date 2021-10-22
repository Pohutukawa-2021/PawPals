import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import dogs from './dogs'

export default combineReducers({
  users,
  user,
  dogs
})
