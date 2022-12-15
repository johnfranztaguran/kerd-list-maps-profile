import React from 'react'
import { Block, Text, TextInput, Button } from 'components'
import { formDefinition, strings, colors } from 'constant'
import { ScrollView } from 'react-native-gesture-handler'
import { Screens } from 'enums'
import styles from './styles'

type Props = {
  inputFields: any,
  handleOnChange: (id: string, value: any) => void;
  handleOnRegister: () => void
  navigation: any
  inputError: string
}

const RegisterForm = ({
  inputFields,
  handleOnChange,
  handleOnRegister,
  navigation,
  inputError
}: Props) => {
  const { password } = formDefinition.auth.login

  return (
    <Block flex={1} column style={styles.container}>
      <Block flex={7}>
      <ScrollView>
        <Block style={styles.stepperContainer}>
          <Text
            text={strings.auth.register.pleaseFillIn}
            body
            style={styles.stepperText}
          />
          <Text
            text={strings.auth.register.basicInformation}
            h4
            style={styles.h4}
          />
        </Block>
        <Block style={styles.bodyContainer}>
          <Block>
            <TextInput
              id="email"
              label={strings.auth.register.emailAddress}
              value={inputFields.email}
              onValueChange={handleOnChange}
              style={styles.txtInput}
            />
            <TextInput
              id="password"
              inputType={password.inputType}
              label={strings.auth.register.password}
              value={inputFields.password}
              onValueChange={handleOnChange}
              style={styles.txtInput}
            />
            {inputError && (
              <Text
                body
                text={inputError}
                align="center"
                color={colors.cinnabar}
              />
            )}

            {/* <TextInput
              id="firstName"
              label={strings.auth.register.firstName}
              onValueChange={() => {}}
              style={styles.txtInput}
            />
            <TextInput
              id="lastName"
              label={strings.auth.register.lastName}
              onValueChange={() => {}}
              style={styles.txtInput}
            />
            <TextInput
              id="phoneNumber"
              label={strings.auth.register.phoneNumber}
              onValueChange={() => {}}
              style={styles.txtInput}
            />
            <TextInput
              id="confirmPassword"
              inputType={password.inputType}
              label={strings.auth.register.confirmPassword}
              onValueChange={() => {}}
              style={styles.txtInput}
            /> */}
          </Block>
        </Block>
      </ScrollView>
      </Block>
      <Block style={styles.btnFooter}>
        <Button
          onPress={() => {
            handleOnRegister();
            // if (inputError !== '') {
            //   navigation.navigate(Screens.CompleteRegister)
            // }
          }}
          text={strings.auth.register.register}
        />
      </Block>
    </Block>
  )
}

export default RegisterForm
