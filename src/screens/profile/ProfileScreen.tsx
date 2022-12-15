import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import ProfileForm from './ProfileForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@redux/reducers';
import { NativeModules } from "react-native";
import { COMMON } from '@redux/actions/actionTypes';
import { logout } from '../../../config/firebase'

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const userInfo: any = useSelector<AppState>(
    state => state.login.userInfo,
  );

  const handlePressLogout = async () => {

    await dispatch({type: COMMON.SET_PURGE })
    setTimeout(async() => {
      await logout();
    },1000)
  }

  // useEffect(() => {
  //   return () => {
  //     NativeModules.DevSettings.reload();
  //   }
  // }, [])

	return (
    <ProfileForm
      navigation={navigation}
      userInfo={userInfo}
      handlePressLogout={handlePressLogout}
    />
  )
}

export default ProfileScreen;
