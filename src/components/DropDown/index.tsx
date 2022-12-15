import React, { useState, useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import { List } from 'react-native-paper'
import { View, TouchableOpacity } from 'react-native'
import { testIdProps } from 'utils/testAutomation'
import { HelperMessageType } from 'enums'
import { strings, colors } from 'constant'
import InputField from '../InputField'
import SelectionListBottomSheet from '../SelectionListBottomSheet'
import Text from '../Text'
import styles from './styles'

type Props<T> = {
  label?: string
  value: string
  options: Array<T>
  optionsHeaderTitle?: string
  renderOption?: (option: T) => JSX.Element
  style?: any
  errorMessage?: string
  onSelectOption: (option: T) => void
  bottomSheetHeight?: number
  optionKey?: string
  isDisabled?: boolean
}

const Dropdown = <T extends any>(props: Props<T>): JSX.Element => {
  const {
    optionsHeaderTitle,
    options,
    renderOption,
    onSelectOption,
    label,
    value,
    style,
    errorMessage,
    bottomSheetHeight,
    optionKey = '',
    isDisabled
  } = props
  const [isPickerShown, setIsPickerShown] = useState(false)
  const bottomSheetRef = useRef<RBSheet>(null)

  const onClose = () => {
    setIsPickerShown(false)
  }

  const defaultRenderOption = (option: any) => (
    <View style={styles.optionContainer}>
      <Text text={option[optionKey] ?? ''} body />
    </View>
  )
  const handlePickerPress = () => {
    if (isDisabled) {
      return
    }

    setIsPickerShown(true)
    bottomSheetRef?.current?.open()
  }

  const activeOpacity: any = isDisabled ? 1 : undefined

  return (
    <View style={style}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={handlePickerPress}>
        <InputField
          label={label}
          value={value}
          autoCorrect={false}
          contextMenuHidden
          blurOnSubmit={false}
          editable={false}
          allowFontScaling
          disabled={isDisabled}
          pointerEvents="none"
          style={styles.inputFieldStyle}
          error={!!errorMessage}
          helperMessage={{
            type: HelperMessageType.Error,
            message: errorMessage ?? ''
          }}
        />
        <List.Icon
          {...testIdProps(`${strings.testIdText.prefixTxt}List.Icon`)}
          icon={isPickerShown ? 'menu-up' : 'menu-down'}
          style={styles.listIcon}
          color={isDisabled ? colors.gunPowder60 : undefined}
        />
      </TouchableOpacity>
      <SelectionListBottomSheet<T>
        headerTitle={optionsHeaderTitle}
        items={options}
        renderListItem={renderOption ?? defaultRenderOption}
        onSelectItem={onSelectOption}
        closeOnSelect
        onClose={onClose}
        bottomSheetRef={bottomSheetRef}
        height={bottomSheetHeight}
      />
    </View>
  )
}

export default Dropdown
