import { createSelector } from 'reselect'
import { AppState } from 'redux/reducers'

const selectIsLoading = (state: AppState) => state.common.isLoading
const selectErrorMsg = (state: AppState) => state.common.errorMsg

const makeSelectCommonIsLoading = () =>
  createSelector(selectIsLoading, isLoading => isLoading)

const makeSelectCommonErrorMsg = () =>
  createSelector(selectErrorMsg, errorMsg => errorMsg)

export { makeSelectCommonIsLoading, makeSelectCommonErrorMsg }
