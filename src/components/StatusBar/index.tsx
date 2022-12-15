import React from 'react'
import { StatusBar as RNStatusBar } from 'react-native'
import { themes } from 'constant'

const StatusBar = (props: {
  hidden?: boolean
  translucent?: boolean
  networkActivityIndicatorVisible?: boolean
  backgroundColor?: string
  statusBarStyle?: 'dark-content' | 'default' | 'light-content'
}) => {
  const {
    hidden = false,
    translucent = false,
    networkActivityIndicatorVisible = true,
    statusBarStyle = 'light-content',
    backgroundColor = themes.colors.primary
  } = props
  return (
    <RNStatusBar
      // dark-content, light-content and default
      barStyle={statusBarStyle}
      // To hide statusBar
      hidden={hidden}
      // allowing light, but not detailed shapes
      translucent={translucent}
      // The background color of the status bar. Android-only
      backgroundColor={backgroundColor}
      // Control the visibility of the network activity indicator. iOS-only.
      networkActivityIndicatorVisible={networkActivityIndicatorVisible}
    />
  )
}

export default StatusBar
