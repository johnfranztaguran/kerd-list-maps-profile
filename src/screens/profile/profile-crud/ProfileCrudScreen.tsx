import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@redux/reducers';
import ProfileCrudForm from './ProfileCrudForm';
import { Screens } from 'enums'
import { updateUserProfile } from '../../../../config/firebase'

const ProfileCrudScreen = () => {
  const navigation = useNavigation()
  const userInfo: any = useSelector<AppState>(
    state => state.login.userInfo,
  );
  const [inputs, inputField] = useState({
    phoneNumber: '',
    firstName: '',
    email: '',
    lastName: '',
    address: '',
  });
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    inputField({
      phoneNumber: userInfo?.phoneNumber,
      firstName: userInfo?.firstName,
      email: userInfo?.email,
      lastName: userInfo?.lastName,
      address: userInfo?.address,
    })
  }, [userInfo])

  const handleOnChange = (id: any, value: string) => {
    inputField((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleOnSaveEdit = async() => {
    const updateRes = await updateUserProfile(inputs);
    if (updateRes) {
      setInputError('')
      navigation.navigate(Screens.ProfileSettings)
    } else {
      setInputError('Something went wrong!')
    }
  }

	return (
    <ProfileCrudForm
      navigation={navigation}
      handleOnChange={handleOnChange}
      inputs={inputs}
      userInfo={userInfo}
      handleOnSaveEdit={handleOnSaveEdit}
      inputError={inputError}
    />
  )
}

export default ProfileCrudScreen;
