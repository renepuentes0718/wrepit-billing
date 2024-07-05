import React, { useState } from 'react'
import { Formik } from 'formik'
import {
  Button,
  FormHelperText,
  Grid,
  Stack,
  TextField,
} from '@mui/material'
import { forgotPasswordSchema, verifyCodePhoneSchema } from '../schema'
import Banner from '../shared/Banner'
import { gql, useMutation } from '@apollo/client'
import { FORGOT_PASSWORD } from '../api/mutations'

const initialValue = {
  code: '',
}
interface CodeProps {
  code: number
}

export default function VerifyCodeForm(): JSX.Element {

  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState(null)

  const [forgotPassword, { loading }] = useMutation(FORGOT_PASSWORD, {
    onCompleted: (data) => {
      if (!!data) {
        setSeverity('success')
        setMessage('Phone verification was successful')
      }
    },
    onError: () => {
      setSeverity('error')
      setMessage('Sorry, phone verification was unsuccessful')
    }
  })

  const handleSubmit = (event) => {
    forgotPassword({ variables: { email: event.code } })
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValue}
      validationSchema={verifyCodePhoneSchema}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
        <>
          {message && <Banner severity={severity} message={message} />}
          <br />
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <TextField
                    id='code'
                    type='number'
                    value={values.email}
                    name='code'
                    placeholder='123456'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    error={Boolean(touched.code && errors.code)}
                  />
                </Stack>
                {touched.code && typeof errors.code === 'string' && (
                  <FormHelperText error id='standard-weight-helper-text-email-forgot-Password'>
                    {errors.code}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  disableElevation
                  disabled={loading}
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  sx={{
                    background: '#5bbff1',
                    color: '#FFF'
                  }}
                >
                  Verify phone number
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </Formik>
  )
}
