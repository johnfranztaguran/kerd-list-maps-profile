import React, { memo } from 'react'
import {
  View,
  StatusBar as RNStatusBar,
  Platform,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { testIdProps } from 'utils/testAutomation'
import { strings, themes, colors } from 'constant'
import CustomStatusBar from '../StatusBar'
import Text from '../Text'
import styles from './styles'

type HeaderProps = {
  backgroundColor?: string
  isBack?: boolean
  title: string
  subtitle?: string
  statusBarStyle?: 'dark-content' | 'default' | 'light-content'
  headerStyle?: ViewStyle | any
  leftComponent?: () => JSX.Element
  rightComponent?: () => JSX.Element
  onPressBack?: () => void
}

const Header = memo(
  (props: HeaderProps): JSX.Element => {
    const {
      backgroundColor = themes.colors.primary,
      isBack = true,
      title,
      subtitle = '',
      statusBarStyle = 'light-content',
      leftComponent,
      rightComponent,
      headerStyle,
      onPressBack
    } = props

    return (
      <SafeAreaView
        {...testIdProps(
          `${strings.testIdText.prefixView}-header-main-container`
        )}
        style={[
          styles.mainContainer,
          {
            backgroundColor
          },
          ...(headerStyle ? [headerStyle] : [])
        ]}>
        <StatusBar
          backgroundColor={backgroundColor}
          statusBarStyle={statusBarStyle}
          headerStyle={headerStyle}
        />
        <View
          {...testIdProps(
            `${strings.testIdText.prefixView}-navigation-container`
          )}
          style={[styles.navigationContainer]}>
          <View
            {...testIdProps(
              `${strings.testIdText.prefixView}-header-left-container`
            )}
            style={styles.headerLeft}>
            {isBack && (
              <TouchableOpacity onPress={onPressBack}>
                <View style={styles.backButtonWrapper}>
                  <Icon name="arrow-left" size={20} color={colors.white} />
                </View>
              </TouchableOpacity>
            )}

            {leftComponent && leftComponent()}
          </View>
          <View
            {...testIdProps(
              `${strings.testIdText.prefixView}-header-title-container`
            )}
            style={styles.mainHeaderContent}>
            {subtitle !== '' ? (
              <Text
                h5
                white
                text={title}
                ellipsizeMode="tail"
                numberOfLines={1}
                medium
              />
            ) : (
              <Text
                h4
                white
                text={title}
                ellipsizeMode="tail"
                numberOfLines={1}
                medium
              />
            )}

            {subtitle !== '' && (
              <Text
                subtitle
                white
                text={subtitle}
                h4
                ellipsizeMode="tail"
                numberOfLines={1}
                light
              />
            )}
          </View>
          <View
            {...testIdProps(
              `${strings.testIdText.prefixView}-header-right-container`
            )}
            style={styles.headerRight}>
            {rightComponent && rightComponent()}
          </View>
        </View>
      </SafeAreaView>
    )
  }
)

type StatusBarProps = {
  backgroundColor: string
  statusBarStyle: 'dark-content' | 'default' | 'light-content'
  headerStyle?: StyleProp<ViewStyle>
}

const StatusBar = memo(
  (props: StatusBarProps): JSX.Element => {
    const { backgroundColor, statusBarStyle, headerStyle } = props
    const height = Platform.OS === 'ios' ? 0 : RNStatusBar.currentHeight

    return (
      <View
        {...testIdProps(`${strings.testIdText.prefixView}-statusbar-container`)}
        style={[
          {
            backgroundColor,
            height
          },
          ...(headerStyle ? [headerStyle] : [])
        ]}>
        <CustomStatusBar
          translucent
          backgroundColor={backgroundColor}
          statusBarStyle={statusBarStyle}
        />
      </View>
    )
  }
)

export default Header
