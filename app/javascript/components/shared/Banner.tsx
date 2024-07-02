import React from 'react'
import { Alert } from '@mui/material'

interface Props {
  severity: 'success' | 'error' | null
  message: string
}

export default function Banner({ severity, message }: Props): JSX.Element {
  return (
    <Alert severity={severity}>{message}</Alert>
  )
}
