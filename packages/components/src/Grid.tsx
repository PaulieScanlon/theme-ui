import React from 'react'
import Box, { BoxProps } from './Box'
import { ForwardRef } from './types'

export interface GridProps extends BoxProps {
  /**
   * Minimum width of child elements
   */
  width?: string | number | (number | string)[]
  /**
   * 	Number of columns to use for the layout (cannot be used in conjunction with the width prop)
   */
  columns?: string | number | (number | string)[]
  /**
   * Space between child elements
   */
  gap?: string | number
}
/**
 * CSS grid layout component to arrange direct child elements in a tiled grid layout.
 * @see https://theme-ui.com/components/grid
 */

const px = (n: unknown) => (typeof n === 'number' ? n + 'px' : n)

const widthToColumns = (width: number | string | (number | string)[]): any =>
  Array.isArray(width)
    ? width.map(widthToColumns)
    : !!width && `repeat(auto-fit, minmax(${px(width)}, 1fr))`

const countToColumns = (n: number | string | (number | string)[]): any =>
  Array.isArray(n)
    ? n.map(countToColumns)
    : !!n && (typeof n === 'number' ? `repeat(${n}, 1fr)` : n)

export const Grid: ForwardRef<HTMLDivElement, GridProps> = React.forwardRef(
  ({ width, columns, gap = 3, ...props }: GridProps, ref) => {
    const gridTemplateColumns = !!width
      ? widthToColumns(width)
      : countToColumns(columns!)

    return (
      <Box
        ref={ref}
        {...props}
        __themeKey="grids"
        css={{
          display: 'grid',
          gridGap: gap,
          gridTemplateColumns,
        }}
      />
    )
  }
)
