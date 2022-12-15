import { combineReducers } from 'redux'
import login from './loginReducer'
import common from './commonReducer'
import list from './listReducers'

const appReducer = combineReducers({
  login,
  common,
  list
})

export default appReducer
export type AppState = ReturnType<typeof appReducer>
