import React from 'react'
import Box, { BoxOwnProps } from './Box'
import { Assign, ForwardRef } from './types'

const AnchorBox = Box.withComponent('a')

export interface LinkProps
  extends Assign<React.ComponentPropsWithRef<'a'>, BoxOwnProps> {}

/**
 * Link variants can be defined in the `theme.links` object.
 * By default the Link component will use styles defined in `theme.styles.a`.
 * @see https://theme-ui.com/components/link
 */
export const Link: ForwardRef<
  HTMLAnchorElement,
  LinkProps
> = React.forwardRef((props, ref) => (
  <AnchorBox ref={ref} variant="styles.a" {...props} __themeKey="links" />
))
