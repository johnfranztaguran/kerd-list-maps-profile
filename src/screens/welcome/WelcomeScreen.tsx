import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import WelcomeForm from './WelcomeForm';
import { useRoute } from '@react-navigation/native';
import { AppState } from 'redux/reducers'
import { COMMON } from 'redux/actions/actionTypes'

const WelcomeScreen = () => {
  const route = useRoute();
  const dispatch: any = useDispatch();
  const navigation = useNavigation()
  const userToken: any = useSelector<AppState>(
    state => state.login.user,
  );
  const recipes: any = useSelector<AppState>(
    state => state.list.recipes,
  );
  const userInfo: any = useSelector<AppState>(
    state => state.login.userInfo,
  );

  useEffect(() => {
    if (route?.name === 'Welcome' && !userToken && recipes.length > 0 && userInfo){
      dispatch({type: COMMON.SET_PURGE })
    }
  }, [userToken])

	return <WelcomeForm navigation={navigation} />
}

export default WelcomeScreen;
