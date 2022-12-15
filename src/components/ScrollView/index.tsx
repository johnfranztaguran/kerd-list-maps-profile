/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { ScrollView as ScrollViewNative, ScrollViewProps } from 'react-native'
import { testIdProps } from 'utils/testAutomation'
import { strings } from 'constant'

const withinLimits = (val: number, min: number, max: number): number =>
  val > max ? max : val < min ? min : val

type ScrollContextDataItem = {
  opacity: number
  maxOffset: number
  offset: number
  updateOffset(val: number): void
}

export const ScrollContext = React.createContext<ScrollContextDataItem>({
  opacity: 0,
  maxOffset: 0,
  offset: 0,
  updateOffset: () => {}
})

export const useScroller = () => React.useContext(ScrollContext)

type ChildProps = {
  scrollRef?: any
  children: JSX.Element[] | JSX.Element
}

export const ScrollContextProvider = ({ children }: ChildProps) => {
  const minOffset: number = 0
  const maxOffset: number = 30

  const [offset, setOffset] = useState(0)
  const [opacity, setOpacity] = useState(0)

  const updateOffset = (val: number) => {
    setOffset(withinLimits(val, minOffset, maxOffset))
    setOpacity(withinLimits((val * maxOffset) / 1000, 0, 1))
  }

  return (
    <ScrollContext.Provider
      value={{
        opacity,
        maxOffset,
        offset,
        updateOffset
      }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const ScrollView = (props: ChildProps & ScrollViewProps) => {
  const { updateOffset } = useScroller()
  const { children, scrollRef } = props

  return (
    <ScrollViewNative
      {...testIdProps(`${strings.testIdText.scrollView}-screen`)}
      {...props}
      ref={ref => scrollRef && scrollRef(ref)}
      onScroll={({ nativeEvent }) => {
        updateOffset(nativeEvent.contentOffset.y)
      }}
      scrollEventThrottle={200}>
      {children}
    </ScrollViewNative>
  )
}

export default ScrollView
