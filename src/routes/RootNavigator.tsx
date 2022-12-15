import React from 'react'
import { useSelector } from 'react-redux'
import { makeSelectToken } from 'redux/selectors/loginSelector'
import { makeSelectCommonIsLoading } from 'redux/selectors/commonSelector'
import { AuthToken } from 'redux/reducers/loginReducer'
import { AppState } from 'redux/reducers'
import { useAuth } from '@utils/authUser'
import { Loader } from 'components'
import AuthStack from './AuthStack'
import AppStack from './AppStack'

const RootNavigator = () => {
  const { user } = useAuth();
  const { accessToken } = useSelector<AppState, AuthToken>(makeSelectToken())
  const isLoading = useSelector<AppState, boolean>(makeSelectCommonIsLoading())
  const recipes: any = useSelector<AppState>(
    state => state.list.recipes,
  );
  const categories: any = useSelector<AppState>(
    state => state.list.categories,
  );

  const renderStackNavigator = () =>
  user && recipes.length > 0 && categories.length > 0 ? <AppStack /> : <AuthStack />


  return (
    <>
      {isLoading && <Loader />}
      {renderStackNavigator()}
    </>
  )
}

export default RootNavigator
