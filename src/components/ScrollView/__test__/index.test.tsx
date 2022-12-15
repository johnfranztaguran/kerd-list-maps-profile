import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { ScrollView } from '../index'

describe('Component: ScrollView', () => {
  it('Should render a <ScrollView />', () => {
    const { baseElement } = render(
      <ScrollView>
        <Text>Child Element</Text>
      </ScrollView>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
