import { APP_LIST, COMMON } from '../actions/actionTypes'

export type ListReducerState = {
  isLoading: boolean
  errorMsg: undefined,
  recipes: any,
  categories: any
  selectedRecipe: object
}

export const initialState: ListReducerState = {
  isLoading: false,
  errorMsg: undefined,
  recipes: [],
  categories: [],
  selectedRecipe: {}
}

const listReducer = (
  state = initialState,
  action: any = {}
): ListReducerState => {
  switch (action.type) {
    case APP_LIST.GET_REQUEST_RECIPES:
      return { ...state, isLoading: action.payload }
    case APP_LIST.GET_FAILED_RECIPES:
      return { ...state, errorMsg: action.payload }
    case APP_LIST.GET_SUCCESS_RECIPES:
      return { ...state, recipes: action.payload }
    case APP_LIST.GET_REQUEST_CATEGORIES:
      return { ...state, isLoading: action.payload }
    case APP_LIST.GET_FAILED_CATEGORIES:
      return { ...state, errorMsg: action.payload }
    case APP_LIST.GET_SUCCESS_CATEGORIES:
      return { ...state, categories: action.payload }
    case APP_LIST.SET_SELECTED_RECIPE:
      return { ...state, selectedRecipe: action.payload }
    case COMMON.SET_PURGE:
      return initialState
    default:
      return state
  }
}

export default listReducer
