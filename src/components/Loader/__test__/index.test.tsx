import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import Loader from '../index'

describe('Component: Loader', () => {
  it('renders correctly', () => {
    const { baseElement } = render(<Loader />)
    expect(baseElement).toMatchSnapshot()
  })
})
