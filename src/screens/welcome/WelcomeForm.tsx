import React from 'react'
import { ScrollView, View } from 'react-native'
import moment from 'moment'
import { Block, Button, Text, Header } from 'components'
import { ButtonMode, ButtonType, Screens } from 'enums'
import { images, colors, strings } from 'constant'
import styles from './styles'

type Props = {
  navigation: any
}

const { LoginUser, RegisterUser } = images
const date = moment(Date.now()).format('ddd, MMMM DD, YYYY')

const WelcomeForm = ({ navigation }: Props) => (
  <Block>
    <Header
      title={`${strings.home.welcome} Home`}
      subtitle={`${strings.home.todayIs} ${date}`}
      isBack={false}
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
      <Block style={styles.quickAccessContainer}>
        <Text
          body
          text={strings.home.quickAccess}
          style={styles.quickAccessText}
        />
        <ScrollView horizontal>
          <Block margin={[10, 90]} row>
            <Block row style={styles.quickAccessButtons}>
              <Button
                mode={ButtonMode.Outlined}
                type={ButtonType.ButtonIcon}
                onPress={() => navigation.navigate(Screens.Login)}
                icon={LoginUser}
                text={strings.home.login}
              />
            </Block>
            <Block row style={styles.quickAccessButtons}>
              <Button
                mode={ButtonMode.Outlined}
                type={ButtonType.ButtonIcon}
                onPress={() => navigation.navigate(Screens.Register)}
                icon={RegisterUser}
                text={strings.home.register}
              />
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  </Block>
)

export default WelcomeForm
