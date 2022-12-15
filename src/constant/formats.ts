const formats = {
  dateTime: 'DD/MM/YYYY',
  money: (currency: string) => {
    return {
      prefix: `${currency}`,
      options: {
        precision: 0,
        separator: '.',
        delimiter: ',',
        unit: ''
      }
    }
  },
  ageMaskOption: {
    options: {
      precision: 0,
      separator: '',
      delimiter: '',
      unit: ''
    }
  },
  numeralsFormatOption: {
    options: {
      compact: '0.0a'
    }
  }
}

export default formats
