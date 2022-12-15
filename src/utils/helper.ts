import { lensPath, set, anyPass, isEmpty, isNil } from 'ramda'
import numeral from 'numeral'
import { formats, regex, messages } from 'constant'
import { ErrorType } from 'enums'

type NumberOrString = number | string
export const createArrLensPath = (stringPath: string): NumberOrString[] => {
  const pathsArray: string[] = stringPath.split('.')
  const finalPathsArray: NumberOrString[] = pathsArray.reduce(
    (partial: NumberOrString[], next) => {
      if (next.includes('[') && next.includes(']')) {
        const field = next.split('[')[0] || ''
        const indexOfOpenBracket = next.indexOf('[') + 1
        const indexOfCloseBracket = next.indexOf(']')
        const idx = next.substring(indexOfOpenBracket, indexOfCloseBracket)
        return [...partial, field, parseInt(idx, 0)]
      }
      return [...partial, next]
    },
    []
  )

  return finalPathsArray
}

export const updateNode = <M>(path: string, value: any, model: M): M => {
  const pathArray = createArrLensPath(path)
  const lensObjPath = lensPath(pathArray)

  return set(lensObjPath, value, model)
}

export const formatNumber = (value: number, decimal?: number) => {
  return value.toFixed(decimal || 0).replace(regex.currency, '$1,')
}

export const formatNumberToFullMoneyString = (value: number) => {
  return formatNumber(value, 2)
}

export const formatNumberAsCompactString = (value: number) => {
  return numeral(value).format(formats.numeralsFormatOption.options.compact)
}

export const isNilOrEmpty = anyPass([isNil, isEmpty])

export const isNumeric = (value: string) => {
  return regex.numberString.test(value)
}

export const getErrorMessage = (field: string, errorType?: ErrorType) => {
  return errorType ? (messages[field][errorType] as string) : ''
}
