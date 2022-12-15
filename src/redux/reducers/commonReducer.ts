import { COMMON } from '../actions/actionTypes'

export type CommonReducerState = {
  isLoading: boolean
  errorMsg: string
}

export const initialState: CommonReducerState = {
  isLoading: false,
  errorMsg: ''
}

const commonReducer = (
  state = initialState,
  action: any = {}
): CommonReducerState => {
  switch (action.type) {
    case COMMON.SET_LOADING:
      return { ...state, isLoading: action.payload, errorMsg: '' }
    case COMMON.SET_ERROR:
      return { ...state, isLoading: false, errorMsg: action.payload }
    case COMMON.SET_PURGE:
      return initialState
    default:
      return state
  }
}

export default commonReducer
