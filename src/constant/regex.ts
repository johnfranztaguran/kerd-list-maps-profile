type RegexType = {
  [key: string]: RegExp
}
const regex: RegexType = {
  url: /^(https?):\/\/[^\s$.?#].[^\s]*$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$/,
  // eslint-disable-next-line max-len
  date: /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/,
  currency: /(\d)(?=(\d{3})+(?!\d))/g,
  numberWithoutDecimal: /[^0-9]/g,
  numberWithDecimal: /[^0-9.]/g,
  numberWithTwoDecimal: /([^\d]*)(\d*(\.\d{0,2})?)(.*)/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$!#&@?%=_])(?=.{8,24}$)/,
  numberString: /^-{0,1}\d+$/
}

export default regex
