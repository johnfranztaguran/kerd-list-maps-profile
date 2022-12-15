import React from 'react'
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack'
import { Header } from 'components'
import { Screens } from 'enums'
import { List, ListCrud, ProfileCrud } from 'screens'
import BottomTabs from './BottomTabs'

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.Main}
      screenOptions={{
        header: ({ options, navigation }: StackHeaderProps) => {
          const title = options?.headerTitle ?? options?.title
          const headerRight = options?.headerRight as () => JSX.Element
          const headerStyle = options?.headerStyle
          return (
            <Header
              title={title as string}
              onPressBack={() => navigation.goBack()}
              rightComponent={headerRight}
              headerStyle={headerStyle}
            />
          )
        }
      }}>
      <Stack.Screen
        name={Screens.Main}
        component={BottomTabs}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={Screens.ListForm}
        component={List}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={Screens.ListCrud}
        component={ListCrud}
        options={{ headerTitle: 'CRUD List' }}
      />
      <Stack.Screen
        name={Screens.ProfileCrud}
        component={ProfileCrud}
        options={{ headerTitle: 'Edit Profile' }}
      />
    </Stack.Navigator>
  )
}

export default AppStack
