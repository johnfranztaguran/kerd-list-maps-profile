import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import { testIdProps } from 'utils/testAutomation'
import { strings, themes } from 'constant'
import styles from './styles'

const Container = (): JSX.Element => {
  return (
    <Modal transparent animationType="none" visible>
      <View style={styles.loader}>
        <ActivityIndicator
          {...testIdProps(
            strings.testIdText.prefixView + strings.testIdText.loader
          )}
          size="large"
          color={themes.colors.primary}
        />
      </View>
    </Modal>
  )
}

export default Container
