import React from 'react'
import { View, KeyboardTypeOptions, Text } from 'react-native'
import { TextInput, HelperText } from 'react-native-paper'
import { RenderProps } from 'react-native-paper/lib/typescript/src/components/TextInput/types'
import { testIdProps } from 'utils/testAutomation'
import { HelperMessageType } from 'enums'
import { ErrorMessage } from 'types'
import { strings } from 'constant'
import styles from './styles'

type Props = {
  helperMessage?: ErrorMessage
  error?: boolean
  mode?: 'flat' | 'outlined'
  label?: string
  value?: string
  autoFocus?: boolean
  keyboardType?: KeyboardTypeOptions
  placeholder?: string
  contextMenuHidden?: boolean
  autoCorrect?: boolean
  blurOnSubmit?: boolean
  editable?: boolean
  allowFontScaling?: boolean
  disabled?: boolean
  pointerEvents?: any
  style?: any
  theme?: any
  prefix?: string
  onChangeText?: (value: string) => void
  render?: (props: RenderProps) => React.ReactNode
  onSubmitEditing?: () => void
  inputReference?: (ref: any) => void
}

const InputField = (props: Props) => {
  const {
    error = false,
    helperMessage = { type: HelperMessageType.Error, message: '' },
    mode = 'outlined',
    label,
    value,
    autoFocus,
    keyboardType,
    placeholder,
    onChangeText,
    render,
    onSubmitEditing,
    contextMenuHidden,
    autoCorrect,
    blurOnSubmit,
    editable,
    disabled,
    pointerEvents,
    theme,
    style,
    prefix,
    inputReference
  } = props

  const isErrorType = helperMessage.type === HelperMessageType.Error

  return (
    <View>
      <View style={styles.wrapper}>
        {prefix && (
          <Text
            {...testIdProps(strings.testIdText.prefixTxt + prefix)}
            style={styles.prefix}>
            {prefix}
          </Text>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            accessibilityStates={undefined}
            accessibilityComponentType={undefined}
            accessibilityTraits={undefined}
            autoCompleteType={undefined}
            {...testIdProps(strings.testIdText.prefixInput + label)}
            style={[style, styles.input]}
            error={isErrorType && error}
            mode={mode}
            label={label}
            value={value}
            keyboardType={keyboardType}
            placeholder={placeholder}
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            autoCorrect={autoCorrect}
            blurOnSubmit={blurOnSubmit}
            autoCapitalize="none"
            render={render}
            editable={editable}
            disabled={disabled}
            allowFontScaling
            theme={theme}
            pointerEvents={pointerEvents}
            contextMenuHidden={contextMenuHidden}
            onSubmitEditing={onSubmitEditing}
            ref={inputReference}
          />
        </View>
      </View>

      {error && (
        <HelperText
          {...testIdProps(`${strings.testIdText.prefixTxt} HelperText`)}
          type={helperMessage.type}
          visible={error}
          style={[
            prefix && styles.helper,
            helperMessage.type === HelperMessageType.Info ? styles.info : null
          ]}>
          {helperMessage.message}
        </HelperText>
      )}
    </View>
  )
}

export default InputField
