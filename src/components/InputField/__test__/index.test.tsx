import React from 'react'
import { render } from '@testing-library/react-native'
import { HelperMessageType } from 'enums'
import InputField from '../index'

describe('Component: InputField', () => {
  it('Should render a InputField', () => {
    const { baseElement } = render(<InputField />)
    expect(baseElement).toMatchSnapshot()
  })

  it('Should render a InputField with error message', () => {
    const errorMsg = 'Invalid input'
    const helperMessage = { type: HelperMessageType.Error, message: errorMsg }
    const { baseElement, getByText } = render(
      <InputField error helperMessage={helperMessage} />
    )

    const element = getByText(errorMsg)
    expect(element.children[0]).toEqual(errorMsg)
    expect(baseElement).toMatchSnapshot()
  })
})
