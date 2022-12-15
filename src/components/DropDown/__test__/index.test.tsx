import React from 'react'
import { render } from '@testing-library/react-native'
import { View as MockView, Text as MockText } from 'react-native'
import Dropdown from '../index'

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View')
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {}
  }
})

describe('Component: Dropdown', () => {
  it('Should render a Dropdown component', () => {
    const onValueChangeEvent = jest.fn()
    const { baseElement } = render(
      <Dropdown<string>
        label="Gender"
        optionsHeaderTitle="Choose Gender"
        value=""
        options={['Male', 'Female']}
        onSelectOption={onValueChangeEvent}
        renderOption={id => (
          <MockView>
            <MockText>{id}</MockText>
          </MockView>
        )}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('Should render a Dropdown component with disabled prop', () => {
    const onValueChangeEvent = jest.fn()
    const { baseElement } = render(
      <Dropdown<string>
        label="Gender"
        optionsHeaderTitle="Choose Gender"
        value=""
        isDisabled
        options={['Male', 'Female']}
        onSelectOption={onValueChangeEvent}
        renderOption={id => (
          <MockView>
            <MockText>{id}</MockText>
          </MockView>
        )}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
