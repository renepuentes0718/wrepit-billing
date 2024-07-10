import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

function SvgHome(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

export default function HomeIcon(): JSX.Element {
  return (
    <SvgHome />
  )
}
