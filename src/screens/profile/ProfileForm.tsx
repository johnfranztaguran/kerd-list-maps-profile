import React from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { Block, Button, Text, Header, AvatarThumbnail, TextInput } from 'components'
import { ButtonMode, ButtonType, Screens } from 'enums'
import { images, colors, strings } from 'constant'
import styles from './styles'

type Props = {
  navigation: any,
  userInfo: any
  handlePressLogout: () => void
}

const { Profile } = images
const date = moment(Date.now()).format('ddd, MMMM DD, YYYY')

const ProfileForm = ({ navigation, userInfo, handlePressLogout }: Props) => {
  return (
    <Block>
      <Header
        title={`${strings.home.welcome} Profile Settings`}
        subtitle={`${strings.home.todayIs} ${date}`}
        isBack={false}
        leftComponent={() => (
          <TouchableOpacity onPress={() => {}}>
            <AvatarThumbnail
              size={32}
              photo={Profile}
              hasPhoto
              initialsName="Joanne Bisnar"
              customStyle={styles.avatar}
            />
          </TouchableOpacity>
        )}
      />
       <Block flex={1} column style={styles.container}>
      <Block flex={7}>
      <ScrollView>
        <Block style={styles.stepperContainer}>
          <Text
            text={strings.profile.firstName}
            body
            style={styles.stepperText}
          />
          <Text
            text={userInfo?.firstName}
            h4
            style={styles.h4}
          />
        </Block>
        <Block style={styles.stepperContainer}>
          <Text
            text={strings.profile.lastName}
            body
            style={styles.stepperText}
          />
          <Text
            text={userInfo?.lastName}
            h4
            style={styles.h4}
          />
        </Block>
        <Block style={styles.stepperContainer}>
          <Text
            text={strings.profile.email}
            body
            style={styles.stepperText}
          />
          <Text
            text={userInfo?.email}
            h4
            style={styles.h4}
          />
        </Block>
        <Block style={styles.stepperContainer}>
          <Text
            text={strings.profile.address}
            body
            style={styles.stepperText}
          />
          <Text
            text={userInfo?.address}
            h4
            style={styles.h4}
          />
        </Block>
        <Block style={styles.stepperContainer}>
          <Text
            text={strings.profile.phoneNumber}
            body
            style={styles.stepperText}
          />
          <Text
            text={userInfo?.phoneNumber}
            h4
            style={styles.h4}
          />
        </Block>
      </ScrollView>
      </Block>
      <Block style={styles.btnFooter}>
        <Button
          onPress={() => {
            navigation.navigate(Screens.ProfileCrud)
          }}
          text={strings.profile.editProflie}
        />
      </Block>
      <Block style={styles.btnFooter}>
        <Button
          onPress={() => {
            handlePressLogout()
          }}
          text={strings.profile.logout}
        />
      </Block>
    </Block>
    </Block>
  )
}

export default ProfileForm
