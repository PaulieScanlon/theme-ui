import styled from '@emotion/styled'
import {
  css,
  get,
  SystemCssProperties,
  Theme,
  SystemStyleObject,
} from '@theme-ui/css'
// @ts-ignore
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
// @ts-ignore
import space from '@styled-system/space'
// @ts-ignore
import color from '@styled-system/color'
import { StyledComponent } from '@emotion/styled'
import { InterpolationWithTheme, ObjectInterpolation } from '@emotion/core'
import { SpaceProps, ColorProps } from 'styled-system'
import { SxStyleProp } from '@theme-ui/core'

import { Assign } from './types'

export interface BoxOwnProps extends SpaceProps, ColorProps {
  as?: React.ElementType
  variant?: string
  sx?: SxStyleProp
  css?: InterpolationWithTheme<any>
  /**
   * @internal
   */
  __themeKey?: string //TODO is __themeKey a "keyof / typeof" from the theme spec?
}

export interface BoxProps
  extends Assign<React.ComponentProps<'div'>, BoxOwnProps> {}

/**
 * Use the Box component as a layout primitive to add margin, padding, and colors to content.
 * @see https://theme-ui.com/components/box
 */

const shouldForwardProp = createShouldForwardProp([
  ...space.propNames,
  ...color.propNames,
])

const sx = (props: { sx?: SystemStyleObject; theme?: Theme }) =>
  css(props.sx)(props.theme) as ObjectInterpolation<any>
const base = (props: { __css?: SystemCssProperties; theme?: Theme }) =>
  css(props.__css)(props.theme) as ObjectInterpolation<any>
const variant = ({ theme, variant, __themeKey = 'variants' }: any) =>
  css(
    get(theme, __themeKey + '.' + variant, get(theme, variant))
  ) as () => ObjectInterpolation<any>

export const Box: StyledComponent<
  React.ComponentProps<'div'>,
  BoxOwnProps,
  {}
> = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  space,
  color,
  sx,
  (props: any) => props.css
)

export default Box
