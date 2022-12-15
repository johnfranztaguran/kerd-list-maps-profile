import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Block, Button, Text, TextInput } from 'components'
import { strings, colors } from 'constant'
import { Screens, ButtonMode, ButtonType } from 'enums'
import styles from './styles'

type Props = {
  navigation: any
  userInfo: any,
  inputs: any,
  handleOnChange: (id: string, value: any) => void;
  handleOnSaveEdit: () => void
  inputError: any
}

const ProfileCrudForm = ({
  navigation,
  userInfo,
  handleOnChange,
  inputs,
  handleOnSaveEdit,
  inputError
}: Props) => {

  return (
    <Block flex={1} column style={styles.container}>
      <Block flex={10}>
        <ScrollView>
          <Block style={styles.stepperContainer}>
            <Text
              text={strings.profile.profileInfo}
              h4
              style={styles.h4}
            />
          </Block>
          <Block style={styles.bodyContainer}>
            <Block>
              <TextInput
                id="firstName"
                label={strings.profile.firstName}
                value={inputs.firstName}
                onValueChange={handleOnChange}
                style={styles.txtInput}
              />
            </Block>
            <Block>
              <TextInput
                id="lastName"
                label={strings.profile.lastName}
                value={inputs.lastName}
                onValueChange={handleOnChange}
                style={styles.txtInput}
              />
            </Block>
            <Block>
              <TextInput
                id="email"
                label={strings.profile.email}
                value={inputs.email}
                onValueChange={handleOnChange}
                style={styles.txtInput}
              />
            </Block>
            <Block>
              <TextInput
                id="address"
                label={strings.profile.address}
                value={inputs.address}
                onValueChange={handleOnChange}
                style={styles.txtInput}
              />
            </Block>
            <Block>
              <TextInput
                id="phoneNumber"
                label={strings.profile.phoneNumber}
                value={inputs.phoneNumber}
                onValueChange={handleOnChange}
                style={styles.txtInput}
              />
            </Block>
            {inputError && (
              <Text
                body
                text={inputError}
                align="center"
                color={colors.cinnabar}
              />
            )}
          </Block>
        </ScrollView>
      </Block>
      <Block style={styles.btnFooter}>
        <Button
          onPress={() => navigation.goBack()}
          text={strings.listCrud.cancel}
          color={colors.nevada}
        />
      </Block>
      <Block style={styles.btnFooter}>
        <Button
          onPress={() => {
            handleOnSaveEdit()
          }}
          text={strings.profile.saveEdit}
        />
      </Block>
    </Block>
  )
}

export default ProfileCrudForm
