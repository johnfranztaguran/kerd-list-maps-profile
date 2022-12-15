import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { setUserAuth } from '../../../redux/actions/loginActions';
import { getRecipes, getCategories } from '@redux/actions/listActions'
import CompleteRegistrationForm from './CompleteRegistrationForm'

const CompleteRegistrationScreen = () => {
  const dispatch: any = useDispatch();
  const navigation = useNavigation()

  const handleOnpressDone = async () => {
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
