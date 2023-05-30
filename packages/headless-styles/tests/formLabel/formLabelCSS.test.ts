import { getFormLabelProps } from '@headless-styles'

describe('FormLabel CSS', () => {
  const baseClass = 'pando-form-label'
  const htmlFor = 'email'
  const value = 'Email alerts'
  const result = {
    htmlFor: '',
    className: `${baseClass} pando_defaultFormLabel`,
    value,
  }

  test('should allow no props to be passed in', () => {
    expect(getFormLabelProps()).toEqual({ ...result, value: 'Form label' })
  })

  test('should accept a htmlFor option', () => {
    expect(getFormLabelProps({ htmlFor, value })).toEqual({
      ...result,
      htmlFor,
    })
  })

  test('should accept a required option', () => {
    expect(getFormLabelProps({ htmlFor, required: true, value })).toEqual({
      ...result,
      htmlFor,
      value: `${value} (required)`,
    })
  })

  test('should accept a hidden kind', () => {
    expect(getFormLabelProps({ htmlFor, kind: 'hidden', value })).toEqual({
      ...result,
      htmlFor,
      className: `${baseClass} pando_hiddenFormLabel`,
    })
  })

  test('should accept a custom className', () => {
    expect(
      getFormLabelProps({
        htmlFor,
        value,
        classNames: ['custom-class-name'],
      })
    ).toEqual({
      ...result,
      htmlFor,
      className: `${baseClass} pando_defaultFormLabel custom-class-name`,
    })
  })
})
