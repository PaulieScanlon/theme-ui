import React from 'react'
import Box, { BoxProps } from './Box'
import { ForwardRef } from './types'
import { Theme } from '@theme-ui/css'

export type MessageProps = BoxProps

/**
 * Styled Box component for callouts and inline messages
 *
 * Message variants can be defined in the theme.messages object.
 * @see https://theme-ui.com/components/message
 */
export const Message: ForwardRef<
  HTMLDivElement,
  MessageProps
> = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __themeKey="messages"
    css={{
      padding: 3,
      paddingLeft: (t: Theme) => t.space[3] - t.space[1], //TODO
      borderLeftWidth: (t: Theme) => t.space[1], //TODO
      borderLeftStyle: 'solid',
      borderLeftColor: 'primary',
      borderRadius: 4,
      bg: 'highlight',
    }}
  />
))
