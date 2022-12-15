import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { registerWithEmailAndPassword } from '../../../../config/firebase'
import RegisterForm from './RegisterForm'
import { Screens } from 'enums'

const RegisterScreen = () => {
  const navigation = useNavigation()
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

  const handleOnRegister = async () => {
    if (inputFields.email !== '' && inputFields.password !== '') {
      const newStr = inputFields.email.replace(/@email.com/, '');
      const dataObj = {
        firstName: `qwerty${newStr}`,
        lastName: `asdfgh${newStr}`,
        email: inputFields.email,
        phoneNumber: '2424242',
        address: `myaddress${newStr}`
      }
      const regUser = await registerWithEmailAndPassword(dataObj, inputFields.email, inputFields.password)
      console.log('register - regUser', regUser)
      if (regUser) {
        setInputError('')
        navigation.navigate(Screens.CompleteRegister)
      } else {
        setInputError(`${regUser}`)
      }
    } else {
      setInputError('Please complete the details!')
    }
  }

  return (
    <RegisterForm
      handleOnChange={handleOnChange}
      inputFields={inputFields}
      handleOnRegister={handleOnRegister}
      navigation={navigation}
      inputError={inputError}
    />
  )
}

export default RegisterScreen
