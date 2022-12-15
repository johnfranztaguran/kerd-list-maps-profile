import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { Block, Text, StatusBar, TextInput, Button } from 'components'
import { images, platform, strings, formDefinition } from 'constant'
import { Screens } from 'enums'
import styles from './styles'

const { LoginBg } = images
const statusBarStyle = platform.isAndroid ? 'light-content' : 'dark-content'

type Props = {
  handleOnLogin: () => void
  navigation: any
  handleOnChange: (id: string, value: any) => void;
  inputFields: any
}

const LoginForm = ({ handleOnLogin, navigation, handleOnChange, inputFields }: Props) => {
  const { email, password } = formDefinition.auth.login

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar statusBarStyle={statusBarStyle} />
      <ImageBackground
        source={LoginBg}
        resizeMode="cover"
        style={styles.imgBackground}>
        <Block flex={1} center middle style={styles.textLogo}>
          <Text h1 primary semibold text='' />
        </Block>
        <Block flex={1} column style={styles.signInWithEmail}>
          <TextInput
            id={email.id}
            inputType={email.inputType}
            label={email.label}
            value={inputFields.email}
            onValueChange={handleOnChange}
            style={styles.txtInput}
          />
          <TextInput
            id={password.id}
            inputType={password.inputType}
            label={password.label}
            value={inputFields.password}
            onValueChange={handleOnChange}
            style={styles.txtInput}
          />
          <Block flex={1} column style={styles.btnSignIn}>
            <Button
              onPress={() => {
                handleOnLogin();
                navigation.navigate(Screens.CompleteRegister);
              }}
              text={strings.auth.login.logIn}
            />
          </Block>
          <Block flex={2} middle row>
            <Text text={strings.auth.login.dontHaveAccount} />
            <TouchableOpacity>
              <Text
                text={strings.auth.login.registerNow}
                style={styles.lnkSignUpNow}
                onPress={() => navigation.navigate(Screens.Register)}
                body
              />
            </TouchableOpacity>
          </Block>
        </Block>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginForm
