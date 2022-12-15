import React from 'react'
import { View as MockView, Text as MockText } from 'react-native'
import { render } from '@testing-library/react-native'
import SelectionListBottomSheet from '../index'

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

describe('Component: SelectionListBottomSheet', () => {
  it('Should render a SelectionListBottomSheet', () => {
    const { baseElement } = render(
      <SelectionListBottomSheet<string>
        items={['a', 'b', 'c']}
        renderListItem={item => (
          <MockView>
            <MockText>{item}</MockText>
          </MockView>
        )}
        onSelectItem={jest.fn}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('Should render a SelectionListBottomSheet with height set', () => {
    const { baseElement } = render(
      <SelectionListBottomSheet<string>
        items={['a', 'b', 'c']}
        renderListItem={item => (
          <MockView>
            <MockText>{item}</MockText>
          </MockView>
        )}
        onSelectItem={jest.fn}
        height={100}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
