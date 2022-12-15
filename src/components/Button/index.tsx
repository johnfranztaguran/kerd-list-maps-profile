import React from 'react'
import { Image } from 'react-native'
import { Button as RNPButton } from 'react-native-paper'
import { ImageSource } from 'react-native-vector-icons/Icon'
import { testIdProps } from 'utils/testAutomation'
import { ButtonMode, ButtonType } from 'enums'
import { strings, colors, themes } from 'constant'
import styles from './styles'

type Props = {
  mode?: ButtonMode
  type?: ButtonType
  text: string
  color?: string
  textColor?: string
  borderColor?: string
  onPress: () => void
  icon?: ImageSource
}

const Button = (props: Props): JSX.Element => {
  const {
    mode = ButtonMode.Contained,
    type = ButtonType.PlainButton,
    text,
    color = themes.colors.primary,
    textColor = colors.solidWhite,
    borderColor = colors.transparent,
    onPress,
    icon
  } = props

  const generateField = (): JSX.Element => {
    switch (type) {
      case ButtonType.PlainButton:
        return createPlainButton()
      case ButtonType.ButtonIcon:
        return createIconButton()
      default:
        return createPlainButton()
    }
  }

  const createPlainButton = (): JSX.Element => {
    return (
      <RNPButton
        {...testIdProps(strings.testIdText.prefixBtn + text)}
        uppercase={false}
        mode={mode}
        color={color}
        style={[styles.buttonBorder, { borderColor }]}
        labelStyle={[styles.buttonLabel, { color: textColor }]}
        onPress={onPress}>
        {text}
      </RNPButton>
    )
  }

  const createIconButton = (): JSX.Element => {
    return (
      <RNPButton
        {...testIdProps(strings.testIdText.prefixBtn + text)}
        mode={mode}
        dark
        compact
        uppercase={false}
        style={styles.buttonBorder}
        labelStyle={styles.buttonIconLabel}
        contentStyle={styles.buttonIconContent}
        onPress={onPress}
        // TODO: find a way to load svg file dinamically
        icon={({ color: tintColor }) => (
          <Image
            source={icon}
            style={[
              {
                tintColor
              },
              styles.buttonIconSize
            ]}
          />
        )}>
        {text}
      </RNPButton>
    )
  }

  return generateField()
}

export default Button
