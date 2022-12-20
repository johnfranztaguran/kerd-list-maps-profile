import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { Screens } from 'enums'
import { logInWithEmailAndPassword } from '../../../../config/firebase'
import LoginForm from './LoginForm'

const LoginScreen = () => {
  const navigation = useNavigation()
  const dispatch: any = useDispatch();
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  })
  const [inputError, setInputError] = useState('')

  const handleOnChange = (id: any, value: string) => {
    setInputFields((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleOnLogin = async () => {
    if (inputFields.email !== '' && inputFields.password !== '') {
      const loginUser = await logInWithEmailAndPassword(inputFields.email, inputFields.password)
      console.log('Login - loginUser', loginUser)
      if (loginUser) {
        setInputError('')
        navigation.navigate(Screens.CompleteRegister)
      } else {
        setInputError(`Something went wrong!`)
      }
    } else {
      setInputError('Please complete the details!')
    }
  };

  return (
    <LoginForm
      handleOnLogin={handleOnLogin}
      navigation={navigation}
      inputFields={inputFields}
      handleOnChange={handleOnChange}
      inputError={inputError}
    />
  )
}

export default LoginScreen
