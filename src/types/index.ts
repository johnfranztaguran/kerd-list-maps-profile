import { HelperMessageType, ErrorType, TextInputType } from 'enums'

export type BaseAction = {
  type: string
  payload: any
}

export type ErrorMessage = {
  type: HelperMessageType
  message: string
}

export type TabRoute = {
  key: string
  title: string
}

export type TextInputModel = {
  id: string
  inputType?: TextInputType
  value?: string
  label?: string
  placeholder?: string
  isRequired?: boolean
  errorType?: ErrorType
  maxValue?: number
  postfix?: string
  maxLength?: number
  decimals?: number
}

export type RouteParams = {
  [key: string]: any
}
