/* eslint-disable @typescript-eslint/indent */
import React, { PropsWithChildren, ReactNode } from 'react'
import RBSheet, { RBSheetProps } from 'react-native-raw-bottom-sheet'
import {
  View,
  Platform,
  SafeAreaView,
  ViewStyle,
  TouchableOpacity,
  Button
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { testIdProps } from 'utils/testAutomation'
import { strings } from 'constant'
import { useScroller, ScrollView } from '../ScrollView'
import Text from '../Text'
import styles from './styles'

export type BottomSheetProps = RBSheetProps &
  PropsWithChildren<{
    headerTitle?: string
    contentScrollable?: boolean
    showsCloseButton?: boolean
    onClose?: () => void
    footer?: JSX.Element
    footerButtonProps?: BottomSheetFooterButtonProps
    bottomSheetRef?: React.RefObject<RBSheet>
    headerStyle?: ViewStyle | Array<ViewStyle>
  }>

type BottomSheetHeaderProps = {
  headerTitle?: string
  contentScrollable?: boolean
  showsCloseButton?: boolean
  onClose?: () => void
  bottomSheetRef?: React.RefObject<RBSheet>
  headerStyle?: ViewStyle | Array<ViewStyle>
  animationType?: 'none' | 'fade' | 'slide'
}

type BottomSheetFooterButtonProps = {
  label: string
  onPress: () => void
}

const BottomSheetHeader = (props: BottomSheetHeaderProps): JSX.Element => {
  const {
    headerTitle = '',
    contentScrollable,
    showsCloseButton = true,
    bottomSheetRef,
    onClose,
    headerStyle
  } = props
  const { opacity } = useScroller()

  return (
    <View
      {...testIdProps(strings.testIdText.prefixView + headerTitle)}
      style={[
        styles.header,
        {
          ...Platform.select({
            ios: {
              shadowOpacity: contentScrollable ? opacity : 0
            },
            android: {
              elevation: contentScrollable ? 10 : 0
            }
          })
        },
        headerStyle
      ]}>
      <View style={styles.headerContentContainer}>
        <View style={styles.headerTitleContainer}>
          <Text text={headerTitle} h5 />
        </View>
        {showsCloseButton && (
          <TouchableOpacity
            {...testIdProps(
              strings.testIdText.prefixBtn + strings.testIdText.closeButton
            )}
            onPress={() => {
              bottomSheetRef?.current?.close()

              if (onClose) {
                onClose()
              }
            }}
            style={styles.closeContainer}>
            <Icon name="close" size={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const BottomSheetFooterButton = (props: BottomSheetFooterButtonProps) => {
  const { label, onPress } = props

  return <Button title={label} onPress={onPress} />
}

const BottomSheet = (props: BottomSheetProps): JSX.Element => {
  const {
    headerTitle = '',
    footer,
    bottomSheetRef,
    children,
    onClose,
    contentScrollable,
    headerStyle,
    footerButtonProps,
    animationType = 'none',
    ...bottomSheetProps
  } = props

  const renderScrollableContent = (content: JSX.Element) => (
    <ScrollView>{content}</ScrollView>
  )

  return (
    <RBSheet
      ref={bottomSheetRef}
      {...testIdProps(`${strings.testIdText.prefixView}BottomSheet`)}
      customStyles={{
        container: styles.container
      }}
      animationType={animationType}
      duration={0}
      {...bottomSheetProps}>
      <SafeAreaView style={styles.contentContainer}>
        <BottomSheetHeader
          headerTitle={headerTitle}
          bottomSheetRef={bottomSheetRef}
          onClose={onClose}
          headerStyle={headerStyle}
        />
        <View style={styles.mainContentContainer}>
          {contentScrollable
            ? renderScrollableContent(children as JSX.Element)
            : children}
        </View>
        {footer ??
          (footerButtonProps && (
            <BottomSheetFooterButton
              label={footerButtonProps.label}
              onPress={footerButtonProps.onPress}
            />
          ))}
      </SafeAreaView>
    </RBSheet>
  )
}

export default BottomSheet
