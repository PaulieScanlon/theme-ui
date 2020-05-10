import React from 'react'
import { MarginProps } from 'styled-system'

import Box from './Box'
import { Label } from './Label'
import { Input, InputProps } from './Input'
import { getMargin, omitMargin } from './util'

export interface FieldOwnProps extends MarginProps {
  /**
   * Text for Label component
   */
  label: string
  /**
   * Used for the for, id, and name attributes
   */
  name: string
}

export type FieldProps<T extends React.ElementType> = FieldOwnProps &
  Omit<React.ComponentProps<T>, 'as' | keyof FieldOwnProps> & {
    /**
     * form control to render, default Input
     */
    as?: T
  }

export const Field = React.forwardRef(
  <T extends React.ElementType = React.ElementType<InputProps>>(
    { as: Control = Input, label, name, ...props }: FieldProps<T>,
    ref: React.Ref<T>
  ) => {
    // workaround for ts(2590)
    const providedProps: JSX.LibraryManagedAttributes<T, any> = {
      ref,
      id: name,
      name,
    } as any

    return (
      <Box {...getMargin(props)}>
        <Label htmlFor={name}>{label}</Label>
        <Control {...providedProps} {...omitMargin(props)} />
      </Box>
    )
  }
)
