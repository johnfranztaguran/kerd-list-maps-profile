import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { setUserAuth } from '../../../redux/actions/loginActions';
import { getRecipes, getCategories } from '@redux/actions/listActions'
import { setLocationPermission, getUserCurrentLocation } from '@redux/actions/commonActions'
import CompleteRegistrationForm from './CompleteRegistrationForm'
// import { PermissionsAndroid } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import { platform } from 'constant';

const CompleteRegistrationScreen = () => {
  const dispatch: any = useDispatch();
  const navigation = useNavigation()

  const requestLocationPermission = async () => {
    let granted;
    let payload;
    const { isIphone } = platform;

    if (isIphone) {
      granted = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
      payload = {
        granted: granted === 'granted',
        never_ask_again: true
      };
    }
    // else {
    //   granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //   );
    //   payload = {
    //     granted: granted === PermissionsAndroid.RESULTS.GRANTED
    //   };
    // }
    if (granted) {
      dispatch(setLocationPermission(payload));
      dispatch(getUserCurrentLocation());
    }
  };

  const handleOnpressDone = async () => {
    await requestLocationPermission()
    await dispatch(setUserAuth())
    await dispatch(getRecipes())
    await dispatch(getCategories())
  }
  return (
    <CompleteRegistrationForm
      handleOnpressDone={handleOnpressDone}
      navigation={navigation}
    />
  )
}

export default CompleteRegistrationScreen
