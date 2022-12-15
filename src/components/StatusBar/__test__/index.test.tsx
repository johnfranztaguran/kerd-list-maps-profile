import React from 'react'
import { render } from '@testing-library/react-native'
import StatusBar from '../index'

describe('Component: StatusBar', () => {
  it('Should render a default <StatusBar>', () => {
    const { baseElement } = render(<StatusBar />)
    expect(baseElement).toMatchSnapshot()
  })

  it('Should render a with props <StatusBar>', () => {
    const { baseElement } = render(
      <StatusBar
        translucent
        backgroundColor="red"
        statusBarStyle="light-content"
      />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
