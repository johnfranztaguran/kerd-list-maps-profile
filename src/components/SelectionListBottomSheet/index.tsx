import React, { useState } from 'react'
import { Platform, TouchableOpacity, FlatList } from 'react-native'
import { window } from 'constant'
import BottomSheet, { BottomSheetProps } from '../BottomSheet'
import styles from './styles'

export type SelectionListBottomSheetProps<T> = BottomSheetProps & {
  items: Array<T>
  renderListItem: (item: T) => JSX.Element
  onSelectItem: (item: T) => void
  closeOnSelect?: boolean
  height?: number
}

const getValidPositionWithinScrollLimits = (
  val: number,
  min: number,
  max: number
): number => {
  if (val > max) {
    return max
  }

  if (val < min) {
    return min
  }

  return val
}

const SelectionListBottomSheet = <T extends any>(
  props: SelectionListBottomSheetProps<T>
) => {
  const maxOffset: number = 30

  const {
    headerTitle = '',
    bottomSheetRef,
    items = [],
    renderListItem,
    onSelectItem,
    onClose,
    closeOnSelect = true,
    height
  } = props

  const onCloseBottomSheet = () => {
    setOpacity(0)

    if (onClose) {
      onClose()
    }
  }

  const onPressItem = (item: T) => {
    onSelectItem(item)

    if (closeOnSelect) {
      bottomSheetRef?.current?.close()
      onCloseBottomSheet()
    }
  }

  const [opacity, setOpacity] = useState(0)

  const updateOffset = (val: number) => {
    setOpacity(
      getValidPositionWithinScrollLimits((val * maxOffset) / 100, 0, 1)
    )
  }

  return (
    <BottomSheet
      headerTitle={headerTitle}
      bottomSheetRef={bottomSheetRef}
      onClose={onCloseBottomSheet}
      height={height ?? window.height / 2}
      headerStyle={[
        styles.selectionBottomListHeaderWrapper,
        {
          ...Platform.select({
            ios: {
              shadowOpacity: opacity ?? 0
            },
            android: {
              elevation: opacity > 0 ? 10 : 0
            }
          })
        }
      ]}>
      <FlatList<T>
        onScroll={event => updateOffset(event.nativeEvent.contentOffset.y)}
        keyExtractor={item => JSON.stringify(item)}
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.selectionListOptionWrapper}
            onPress={() => onPressItem(item)}>
            {renderListItem(item)}
          </TouchableOpacity>
        )}
      />
    </BottomSheet>
  )
}

export default SelectionListBottomSheet
