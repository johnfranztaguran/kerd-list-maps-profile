import { TextInputType } from 'enums'
import strings from './strings'

const formDefinition = {
  auth: {
    login: {
      email: {
        id: 'email',
        inputType: TextInputType.Email,
        label: strings.auth.login.emailAddress,
        isRequired: true
      },
      password: {
        id: 'password',
        inputType: TextInputType.Password,
        label: strings.auth.login.password,
        isRequired: true
      }
    }
  }
}

export default formDefinition
