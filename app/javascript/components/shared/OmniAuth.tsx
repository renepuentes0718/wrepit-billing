import React from 'react'
import { useTheme, useMediaQuery, Button, Stack, Grid, Divider, Typography } from '@mui/material'


interface Prop {
  title: String
}

export default function FirebaseSocial({ title }: Prop): JSX.Element {
  const theme = useTheme()
  const downSM = useMediaQuery(theme.breakpoints.down('sm'))

  // @ts-ignore
  const googleHandler = async () => {
    // login || singup
  }

  const twitterHandler = async () => {
    // login || singup
  }

  const facebookHandler = async () => {
    // login || singup
  }

  return (
    <>
      <Grid item xs={12}>
        <Divider>
          <Typography variant='caption'> {title}</Typography>
        </Divider>
      </Grid>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
        justifyContent={{ xs: 'space-around', sm: 'space-between' }}
        sx={{ '& .MuiButton-startIcon': { mr: { xs: 0, sm: 1 }, ml: { xs: 0, sm: -0.5 } } }}
      >
        <Button
          variant="outlined"
          color="secondary"
          fullWidth={!downSM}
          startIcon={<img src={require('../images/google.svg')} alt="Google" />}
          onClick={googleHandler}
        >
          {!downSM && 'Google'}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth={!downSM}
          startIcon={<img src={require('../images/twitter.svg')} alt="Twitter" />}
          onClick={twitterHandler}
        >
          {!downSM && 'Twitter'}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth={!downSM}
          startIcon={<img src={require('../images/facebook.svg')} alt="Facebook" />}
          onClick={facebookHandler}
        >
          {!downSM && 'Facebook'}
        </Button>
      </Stack>
    </>
  )
}
