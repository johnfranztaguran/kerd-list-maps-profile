import { action } from 'typesafe-actions'
import { COMMON } from './actionTypes'

export const setCommonLoading = (payload: boolean) =>
  action(COMMON.SET_LOADING, payload)

export const setCommonErrorMsg = (payload: string) =>
  action(COMMON.SET_ERROR, payload)
