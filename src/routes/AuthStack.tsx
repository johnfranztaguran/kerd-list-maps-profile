import React from 'react'
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack'
import { Header } from 'components'
import { Login, Welcome, Register, CompleteRegister } from 'screens'
import { Screens } from 'enums'

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName={Screens.Welcome}
    screenOptions={{
      header: ({ options, navigation }: StackHeaderProps) => {
        const title = options?.headerTitle
        const headerStyle = options?.headerStyleInterpolator

        return (
          <Header
            title={title as string}
            onPressBack={() => navigation.goBack()}
            headerStyle={headerStyle}
          />
        )
      }
    }}>
    <Stack.Screen
      name={Screens.Welcome}
      component={Welcome}
      options={{ header: () => null }}
    />
    <Stack.Screen
      name={Screens.Login}
      component={Login}
      options={{ headerTitle: 'Login' }}
    />
    <Stack.Screen
      name={Screens.Register}
      component={Register}
      options={{ headerTitle: 'Register' }}
    />
    {/* Will separate this screen on the actual app */}
    {/* to disable back swipe */}
    {/* for now will leave this as it is */}
    <Stack.Screen
      name={Screens.CompleteRegister}
      component={CompleteRegister}
      options={{ header: () => null}}
    />
  </Stack.Navigator>
)

export default AuthStack
