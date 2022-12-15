import { ErrorType } from 'enums'

type Message = {
  [key: string]: MessageType
}
type MessageType = {
  [key in ErrorType]?: string
}
const messages: Message = {
  email: {
    empty: 'Please enter your email address.',
    invalid: 'Please check to ensure the email address is valid.',
    existed: 'This email address is already exist.'
  },
  password: {
    empty: 'Please enter a valid password',
    invalid: 'Please enter a valid password',
    info:
      '8-24 characters, with at least one lowercase and uppercase, a digit and a symbol.'
  }
}

export default messages
