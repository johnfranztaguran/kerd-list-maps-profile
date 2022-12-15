import React from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { Block, Button, Text, Header, AvatarThumbnail } from 'components'
import { ButtonMode, ButtonType, Screens } from 'enums'
import { images, colors, strings } from 'constant'
import styles from './styles'

type Props = {
  navigation: any
}

const { Profile } = images
const date = moment(Date.now()).format('ddd, MMMM DD, YYYY')

const MapsForm = ({ navigation }: Props) => {
  console.log('MapsForm - navigation', navigation)
  return (
    <Block>
      <Header
        title={`${strings.home.welcome} Google Maps`}
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
      <Block column style={styles.mainContainer}>
        <Block column style={styles.simpleAppContainer}>
          <Text h5 text={strings.home.assessment} style={styles.title} />
          <View style={styles.panelBox}>
            <Text
              body
              text={strings.home.goodDay}
              align="center"
              color={colors.grayishBlue}
            />
            <Text
              body
              text={strings.home.happyCoding}
              align="center"
              color={colors.grayishBlue}
            />
          </View>
        </Block>
      </Block>
    </Block>
  )
}

export default MapsForm
