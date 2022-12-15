import { createSelector } from 'reselect'
import { AppState } from 'redux/reducers'

const selectToken = (state: AppState) => state.login.token

const makeSelectToken = () => createSelector(selectToken, token => token)

export { selectToken, makeSelectToken }
