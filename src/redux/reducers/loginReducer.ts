import { AUTH, COMMON } from '../actions/actionTypes'

export type AuthToken = {
  accessToken: string
  refreshToken: string
}

export type LoginReducerState = {
  token: AuthToken,
  isLoading: boolean,
  user: undefined,
  errorLogin: undefined
  userInfo: undefined
}

export const initialState: LoginReducerState = {
  token: {
    accessToken: '',
    refreshToken: ''
  },
  isLoading: false,
  user: undefined,
  errorLogin: undefined,
  userInfo: undefined
}

const loginReducer = (
  state = initialState,
  action: any = {}
): LoginReducerState => {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
      return { ...state, token: { ...action.payload } }
    case AUTH.LOGIN_REQUEST:
      return { ...state, isLoading: action.payload }
    case AUTH.SET_USER_AUTH:
      return { ...state, user: action.payload }
    case AUTH.LOGIN_FAILED:
      return { ...state, errorLogin: action.payload, user: action.payload }
    case AUTH.SET_USER_AUTH_INFO:
      return { ...state, userInfo: action.payload }
    case COMMON.SET_PURGE:
      return initialState
    default:
      return state
  }
}

export default loginReducer
