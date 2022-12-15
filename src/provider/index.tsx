import React from 'react'
import MultiProviders from 'another-multi-provider'
import { ScrollContextProvider } from '../components/ScrollView'

type Props = {
  children: JSX.Element
}
// all custom provider are included here
const providers = [ScrollContextProvider]

export default ({ children }: Props): JSX.Element => (
  <MultiProviders providers={providers}>{children}</MultiProviders>
)
