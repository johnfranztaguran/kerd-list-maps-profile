import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Profile, List, CustomBottomTabNav, Maps } from 'screens'
import { Screens } from 'enums'

// type TabBarIconProps = {
// }

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName={Screens.ListForm}
        backBehavior="initialRoute"
        tabBar={(props) => <CustomBottomTabNav {...props} />}
        >
        <Tab.Screen name={Screens.ListForm} component={List} />
        <Tab.Screen name={Screens.GoogleMaps} component={Maps} />
        <Tab.Screen name={Screens.ProfileSettings} component={Profile} />
      </Tab.Navigator>
    </React.Fragment>
  )
}

export default BottomTabs
