import React from 'react'
import { Text as MockText } from 'react-native'
import { render } from '@testing-library/react-native'
import Header from '../index'

describe('Component: Header', () => {
  const onPress = jest.fn()
  it('Should render a <Header />', () => {
    const { baseElement } = render(
      <Header title="Test Title" onPressBack={onPress} />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('Should render a <Header /> with background color and right component', () => {
    const rightComponent = () => <MockText>Edit</MockText>
    const { baseElement } = render(
      <Header
        backgroundColor="red"
        title="Test Title"
        rightComponent={rightComponent}
        onPressBack={onPress}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
