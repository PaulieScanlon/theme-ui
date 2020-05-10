import React from 'react'
import Box, { BoxOwnProps } from './Box'
import { Assign } from './types'

export interface SVGProps
  extends Assign<React.ComponentProps<'svg'>, BoxOwnProps> {
  size?: number | string
}

const SVG = ({ size = 24, ...props }) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={size + ''}
    height={size + ''}
    viewBox="0 0 24 24"
    fill="currentcolor"
    {...props}
  />
)

export default SVG
