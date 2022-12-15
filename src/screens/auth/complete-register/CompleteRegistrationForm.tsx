import React from 'react'
import { ImageBackground } from 'react-native'
import { Block, Text, Button } from 'components'
import { images, strings, colors } from 'constant'
import styles from '../register/styles'

const { Send } = images

type Props = {
  handleOnpressDone: () => void
  navigation: any
}

const CompleteRegistrationForm = ({ handleOnpressDone, navigation }: Props) => {

  return (
    <Block flex={1} center column style={styles.container}>
      <Block middle column center>
        <ImageBackground
          source={Send}
          resizeMode="contain"
          style={styles.CompleteRegisterBackground}
        />
        <Text
          text={strings.auth.completeRegister.proceedApp}
          h1
          align="center"
          style={styles.paddingTop16}
        />
        <Text
          text={strings.auth.completeRegister.subtitle}
          body
          align="center"
          color={colors.gray2}
          style={styles.paddingTopBottom16}
        />
        <Button
          onPress={() => {
            handleOnpressDone();
          }}
          text={strings.auth.completeRegister.done}
        />
      </Block>
    </Block>
  )
}

export default CompleteRegistrationForm
