declare module 'react-native-simple-store'
declare module 'react-native-markdown-package'
declare module 'another-multi-provider'

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  export default content
}
