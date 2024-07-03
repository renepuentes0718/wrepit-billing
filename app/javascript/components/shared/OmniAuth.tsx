import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import {
  useTheme,
  Grid,
  Divider,
  Typography,
  Button,
} from '@mui/material'

interface Prop {
  title: String
}


function OmniAuth({ title }: Prop): JSX.Element {
  const handleLogin = () => {
    fetch('http://localhost:5000/auth/google_oauth2', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: ''
    })
  }

  const onError = (error) => { console.error(error) }

  return (
    <Grid item xs={12}>
      <Divider>
        <Typography variant='caption'>{title}</Typography>
      </Divider>
      <Button fullWidth>
        <GoogleLogin
          text={'continue_with'}
          width={'100%'}
          size='large'
          onSuccess={handleLogin}
          onError={() => onError}
        />
      </Button>
    </Grid>
  )
}


export default function OmniAuthWrapper({ title }: Prop): JSX.Element {
  return (
    <GoogleOAuthProvider clientId='99849875089-u664kvq5gp51tcikb4oohiu8j43mn4cd.apps.googleusercontent.com'>
      <OmniAuth title={title} />
    </GoogleOAuthProvider>
  )
}
