import { combineReducers, createStore } from 'redux'
import { userSlice } from '../user/slice'

export const store = createStore(
  combineReducers({
    user: userSlice.reducer,
  })
)
