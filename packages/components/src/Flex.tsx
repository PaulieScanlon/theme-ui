import styled from '@emotion/styled'
import { StyledComponent } from '@emotion/styled'
import Box, { BoxProps } from './Box'

export type FlexProps = BoxProps

/**
 * Use the Flex component to create flexbox layouts.
 * @see https://theme-ui.com/components/flex
 */
export const Flex: StyledComponent<
  React.ComponentPropsWithRef<'div'>,
  FlexProps,
  {}
> = styled(Box)({
  display: 'flex',
})
