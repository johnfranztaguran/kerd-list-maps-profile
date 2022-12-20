/*
 *--------------------------------------------------*
 * Example:
 * APP = {
 * 	SET_STORE_STATE: 'APP/SET_STORE_STATE'
 * }
 *--------------------------------------------------*
 */
function createActionTypes(base: string, types: string[]) {
  const res: { [s: string]: string } = {}
  types.forEach(type => {
    res[type] = `${base}/${type}`
  })
  return res
}

export const AUTH = createActionTypes('AUTH', [
  'LOGIN_REQUEST',
  'LOGIN_SUCCESS',
  'LOGIN_FAILED',
  'SET_USER_AUTH',
  'SET_USER_AUTH_INFO'
])

export const COMMON = createActionTypes('COMMON', ['SET_LOADING', 'SET_ERROR', 'SET_PURGE', 'SET_LOCATION_PERMISSION', 'USE_CURRENT_LOCATION'])

export const APP_LIST = createActionTypes('APP_LIST', [
  'GET_REQUEST_RECIPES',
  'GET_FAILED_RECIPES',
  'GET_SUCCESS_RECIPES',
  'GET_REQUEST_CATEGORIES',
  'GET_FAILED_CATEGORIES',
  'GET_SUCCESS_CATEGORIES',
  'SET_SELECTED_RECIPE',
  'DELETE_SELECTED_RECIPE',
  'EDIT_SELECTED_RECIPE'

]);

