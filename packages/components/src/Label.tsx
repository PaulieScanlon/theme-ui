import React from 'react'
import Box, { BoxOwnProps } from './Box'
import { Assign, ForwardRef } from './types'

const LabelBox = Box.withComponent('label')

export interface LabelProps
  extends Assign<React.ComponentProps<'label'>, BoxOwnProps> {}

/**
 * Label variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.label` variant by default.
 * @see https://theme-ui.com/components/label/
 */
export const Label: ForwardRef<HTMLLabelElement, LabelProps> = React.forwardRef(
  (props, ref) => (
    <LabelBox
      ref={ref}
      variant="label"
      {...props}
      __themeKey="forms"
      css={{
        width: '100%',
        display: 'flex',
      }}
    />
  )
)
