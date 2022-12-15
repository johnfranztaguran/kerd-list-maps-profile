import React from 'react'
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native'
import { Avatar } from 'react-native-paper'
import styles from './styles'

type Props = {
  size: number
  hasPhoto: boolean
  initialsName: string
  photo?: any
  customStyle?: StyleProp<ViewStyle>
}

const AvatarThumbnail = (props: Props & ViewProps): JSX.Element => {
  const { size, hasPhoto, initialsName, photo, customStyle } = props
  const initials = initialsName.match(/\b\w/g) || []
  return (
    <View style={[styles.mainContainer, ...(customStyle ? [customStyle] : [])]}>
      {hasPhoto ? (
        <Avatar.Image size={size} source={photo} />
      ) : (
        <Avatar.Text
          size={size}
          label={((initials.shift() || '') + (initials.pop() || ''))
            .toUpperCase()
            .toString()}
          style={styles.textContainer}
          labelStyle={styles.text}
        />
      )}
    </View>
  )
}

export default AvatarThumbnail
