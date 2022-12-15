import React from 'react'
import { render } from '@testing-library/react-native'
import AppIcon from '../index'

describe('Component: AppIcon', () => {
  it('Should render a <AppIcon>', () => {
    const { baseElement } = render(
      <AppIcon name="ic-home" size={20} color="red" />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
