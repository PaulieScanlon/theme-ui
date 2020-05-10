import React from 'react'
import Box, { BoxOwnProps } from './Box'
import { Assign, ForwardRef } from './types'

export interface ImageProps
  extends Assign<React.ComponentProps<'img'>, BoxOwnProps> {}
/**
 * Image style variants can be defined in the theme.images object.
 * @see https://theme-ui.com/components/image/
 */

export const Image: ForwardRef<HTMLImageElement, ImageProps> = React.forwardRef(
  (props, ref) => (
    <Box
      ref={ref}
      as="img"
      {...props}
      __themeKey="images"
      css={{
        maxWidth: '100%',
        height: 'auto',
        ...(props.css as any), //TODO
      }}
    />
  )
)
