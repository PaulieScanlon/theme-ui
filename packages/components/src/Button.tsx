import React from 'react'
import _Box, { BoxOwnProps } from './Box'
import { Assign, ForwardRef } from './types'

const Box = _Box.withComponent('button')

export interface ButtonProps
  extends Assign<React.ComponentPropsWithRef<'button'>, BoxOwnProps> {}

/**
 * Primitive button component with variants
 * @see https://theme-ui.com/components/button
 */
export const Button: ForwardRef<
  HTMLButtonElement,
  ButtonProps
> = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    variant="primary"
    {...props}
    __themeKey="buttons"
    css={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 4,
    }}
  />
))
