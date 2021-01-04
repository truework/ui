/* eslint-disable */
import { DefaultTheme } from 'styled-components'

import { convertGutterValuesToPixels } from './'

const theme = {
  space: {
    sm: '16px',
    med: '24px',
    lg: '32px'
  }
}

describe('Grid', () => {
  it('correctly parses unit value', () => {
    const gutter = convertGutterValuesToPixels(theme as DefaultTheme, '10px')
    expect(gutter[0]).toEqual('5px')
  })

  it('correctly parses array of unit values', () => {
    const gutter = convertGutterValuesToPixels(theme as DefaultTheme, [
      '10px',
      '2rem'
    ])
    expect(gutter[0]).toEqual('5px')
    expect(gutter[1]).toEqual('1rem')
  })

  it('correctly parses theme value', () => {
    const gutter = convertGutterValuesToPixels(theme as DefaultTheme, 'sm')
    expect(gutter[0]).toEqual('8px')
  })

  it('correctly parses array of theme values', () => {
    const gutter = convertGutterValuesToPixels(theme as DefaultTheme, [
      'sm',
      'med'
    ])
    expect(gutter[0]).toEqual('8px')
    expect(gutter[1]).toEqual('12px')
  })

  it('correctly multiplies values', () => {
    const gutter = convertGutterValuesToPixels(
      theme as DefaultTheme,
      ['sm', '16px', '2rem'],
      -1
    )
    expect(gutter[0]).toEqual('-8px')
    expect(gutter[1]).toEqual('-8px')
    expect(gutter[2]).toEqual('-1rem')
  })
})
