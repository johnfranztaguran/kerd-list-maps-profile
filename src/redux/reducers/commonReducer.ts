import { COMMON } from '../actions/actionTypes'

export type CommonReducerState = {
  isLoading: boolean
  errorMsg: string
  locationPermission: null
  userLocation: null
}

export const initialState: CommonReducerState = {
  isLoading: false,
  errorMsg: '',
  locationPermission: null,
  userLocation: null
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
    case COMMON.SET_LOCATION_PERMISSION:
      return { ...state, locationPermission: action.payload }
    case COMMON.USE_CURRENT_LOCATION:
      return { ...state, userLocation: action.payload }
    default:
      return state
  }
}

export default commonReducer
