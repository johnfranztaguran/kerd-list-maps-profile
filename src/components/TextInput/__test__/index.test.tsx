import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import { MessageType, ErrorType } from 'enums';
import { getErrorMessage } from 'utils/helper';
import TextInput from '../index';

jest.mock('react-native-gesture-handler', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const View = require('react-native/Libraries/Components/View/View');
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
    Direction: {},
  };
});

describe('Component: TextInput', () => {
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  it('Should render a TextInput', () => {
    const { baseElement, getByTestId } = render(
      <TextInput onValueChange={onChange} label="name" id="name" />,
    );

    const input = getByTestId('input-name');
    act(() => {
      fireEvent.changeText(input, 'test');
    });
    expect(input.props.value).toBe('test');

    act(() => {
      fireEvent.focus(input, onFocus());
    });
    expect(onFocus).toBeCalled();

    act(() => {
      fireEvent.focus(input, onBlur());
    });
    expect(onBlur).toBeCalled();

    expect(baseElement).toMatchSnapshot();
  });

  it('Should render a TextInput with error message', () => {
    const { baseElement } = render(
      <TextInput
        id="email"
        onValueChange={onChange}
        messageType={MessageType.Error}
        message={getErrorMessage('email', ErrorType.Empty)}
      />,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
