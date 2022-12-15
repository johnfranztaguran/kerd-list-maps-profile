import React from 'react'
import { View as MockView, Text as MockText } from 'react-native'
import { render } from '@testing-library/react-native'
import BottomSheet from '../index'

describe('Component: BottomSheet', () => {
  it('Should render a BottomSheet with no optional props set, default props set within component', () => {
    const { baseElement } = render(
      <BottomSheet>
        <MockView>
          <MockText>Hello</MockText>
        </MockView>
      </BottomSheet>
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('Should render a BottomSheet with props set', () => {
    const styles = { backgroundColor: 'red' }

    const { baseElement } = render(
      <BottomSheet
        headerTitle="Header"
        contentScrollable
        showsCloseButton={false}
        onClose={jest.fn}
        footerButtonProps={{
          label: 'Footer',
          onPress: jest.fn
        }}
        headerStyle={styles}>
        <MockView>
          <MockText>Hello</MockText>
        </MockView>
      </BottomSheet>
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('Should render a BottomSheet with footer set', () => {
    const styles = { backgroundColor: 'red' }

    const { baseElement } = render(
      <BottomSheet
        headerTitle="Header"
        contentScrollable
        showsCloseButton={false}
        onClose={jest.fn}
        footer={
          <MockView>
            <MockText>Footer</MockText>
          </MockView>
        }
        headerStyle={styles}>
        <MockView>
          <MockText>Hello</MockText>
        </MockView>
      </BottomSheet>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
