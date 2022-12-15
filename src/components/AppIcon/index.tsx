/**
 * app icon set component.
 * Usage: <AppIcon name="icon-name" size={20} color="#4F8EF7" />
 */
import React, { memo } from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from './selection.json'

type Props = {
  name: string
  size: number
  color: string
}

const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'mdaid-icon',
  'mdaid-icon.ttf'
)

const AppIcon = memo(
  (props: Props): JSX.Element => {
    const { name, size = 20, color } = props
    return <Icon name={name} size={size} color={color} />
  }
)

export default AppIcon
